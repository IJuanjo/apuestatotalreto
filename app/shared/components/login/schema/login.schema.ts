import { z } from "zod";

import type { User } from "@/app/shared/interface/user.interface";

export type LoginForm = Pick<User, "email" | "password">;

export const loginSchema = z.object({
  email: z.email({
    error: "Ingrese un correo valido"
  }),
  password: z.string().min(6, "El password debe ser mayor a 5 caracteres")
});
