import { UsersData } from "@/app/shared/interface/user.interface";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { readFileSync } from "node:fs";
import path from "node:path";

const DATA_FILE = path.join(process.cwd(), 'app/shared/data/users.json');

async function readUsers(): Promise<UsersData> {
    try {
        const data = readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return { users: [] };
    }
}

const handler = NextAuth({
    providers: [CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                throw new Error('Email y contraseña son requeridos');
            }

            try {
                const email = (credentials.email as string).toLowerCase().trim();
                const password = credentials.password as string;

                const usersData = await readUsers();
                const user = usersData.users.find(u => u.email === email);

                if (!user) {
                    return null;
                }

                const isPasswordValid = await bcrypt.compare(password, user.password);

                if (!isPasswordValid) {
                    return null;
                }


                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                };

            } catch (error) {
                return null;
            }
        }
    })],
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
});
export { handler as GET, handler as POST };