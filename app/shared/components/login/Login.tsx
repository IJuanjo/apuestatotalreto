"use client";

import Input from "@/components/input/Input"
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { contextAuth } from "../../providers/auth-provider/AuthProvider";
import { Render } from "../render/Render";
import { loginSchema, type LoginForm } from "./schema/login.schema";

const Login = () => {

  const [isError, setIsError] = useState(false);

  const setterActionComponentAuth = use(contextAuth);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema)
  });

  const handleLogin = async ({ email, password }: LoginForm) => {
    setIsError(false);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    if (res?.ok) {
      setterActionComponentAuth?.(undefined)
      return;
    }
    setIsError(true);
  }


  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Render isRender={isError} >
        <div className="text-red-500 mb-4">
          Credenciales incorrectas, por favor intenta de nuevo.
        </div>
      </Render>
      <Input label="Email" type="email" placeholder="tu@email.com" className='mb-4' {...register("email")} />
      {errors?.email && <span className="text-red-500 mt-sm text-center">{errors.email.message}</span>}

      <Input label="contraseña" placeholder="••••••••" type="password" {...register("password")} />
      {errors?.password && <span className="text-red-500 mt-sm text-center">{errors.password.message}</span>}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-center rounded-sm mt-6">
        {isSubmitting ? "Ingresando..." : "Iniciar Sesión"}
      </button>
      <div className="text-secondary text-center mt-5 cursor-pointer" onClick={() => setterActionComponentAuth?.("register")} >
        ¿No tienes cuenta? Crear cuenta
      </div>
    </form>
  )
}

export default Login
