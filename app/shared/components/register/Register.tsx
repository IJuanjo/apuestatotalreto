"use client";

import Input from "@/components/input/Input";
import { use } from "react";
import { contextAuth } from "../../providers/auth-provider/AuthProvider";
import { Render } from "../render/Render";
import useFormRegister from "./hooks/use-form-register/useFormRegister";

const Register = () => {
  const setterActionComponentAuth = use(contextAuth);
  const { errors, handleRegister, register, handleSubmit, isPending, isError } = useFormRegister(setterActionComponentAuth);

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Input label="Nombre"  {...register('name')} />
      {errors?.name && <span className="text-red-500 mt-sm text-center">{errors.name.message}</span>}

      <Input label="Email" {...register('email')} />
      {errors?.email && <span className="text-red-500 mt-sm text-center">{errors.email.message}</span>}

      <Input label="Contraseña" type="password" {...register('password')} />
      {errors?.password && <span className="text-red-500 mt-sm text-center">{errors.password.message}</span>}


      <Render isRender={Boolean(isError)}>
        <p className="text-red-500 mt-sm text-center">Error al registrar el usuario</p>
      </Render>

      <button type="submit" disabled={isPending} className="btn-primary w-full mt-lg">
        {isPending ? "Creando..." : "Crear Cuenta"}
      </button>


      <button
        type="button"
        className="mt-md w-full"
        onClick={() => setterActionComponentAuth?.("login")}
      >
        ¿Ya tienes cuenta?
      </button>
    </form>
  );
};

export default Register;