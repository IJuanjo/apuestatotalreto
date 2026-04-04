import bcrypt from "bcryptjs";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "app/shared/data/users.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return Response.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { error: "Mínimo 6 caracteres" },
        { status: 400 }
      );
    }

    const data = JSON.parse(
      await fs.readFile(DATA_FILE, "utf-8").catch(() => '{"users": []}')
    );

    const exists = data.users.some((u: any) => u.email === email);

    if (exists) {
      return Response.json(
        { error: "Usuario ya existe" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = {
      id: `user_${Date.now()}`,
      name,
      email,
      password: hashed,
      createdAt: new Date().toISOString(),
    };

    data.users.push(newUser);

    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}