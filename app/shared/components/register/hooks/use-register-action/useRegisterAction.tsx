import { useMutation } from "@tanstack/react-query";

interface RegisterParams {
    name: string;
    email: string;
    password: string;
}

export const useRegister = () => useMutation({
    mutationKey: ['Register'],
    mutationFn: async (params: RegisterParams) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/register`, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.error ?? "Error al registrar");
        }

        return data;
    }
})