"use client";

import { signIn } from "next-auth/react";

const AuthGoogle = () => {
  const handleGoogleSignIn = () => {
    signIn("google", {
      callbackUrl: "/bets",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-sm text-neutral-500">
          Inicia sesion con tu cuenta de Google para acceder a tu perfil y gestionar tus apuestas.
        </p>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex w-full items-center justify-center gap-3 rounded-sm border border-neutral-200 bg-white px-4 py-3 font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-neutral-100"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-700">
          G
        </span>
        <span>Continuar con Google</span>
      </button>

      <p className="text-center text-xs text-neutral-400">
        Al continuar, seras redirigido a Google para autenticar tu cuenta.
      </p>
    </div>
  );
};

export default AuthGoogle;