import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty({
        error: 'Nombre requerido'
    }).min(3, "El nombre debe ser mayor a 3 caracteres"),
    email: z.email({
        error:'Ingrese un correo valido'
    }),
    password: z.string().min(6, "El password debe ser mayor a 5 caracteres"),
});