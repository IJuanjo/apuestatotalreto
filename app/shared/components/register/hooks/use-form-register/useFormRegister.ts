import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema/schemaRegister";
import { useRegister } from "../use-register-action/useRegisterAction";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Register } from "../../interface/register.interface";
import { ContextAuth } from "@/app/shared/providers/auth-provider/AuthProvider";

const useFormRegister = (setterActionComponentAuth: ContextAuth) => {

    const { mutateAsync, isPending, isError } = useRegister()

    const { register, handleSubmit, formState: { errors } } = useForm<Register>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode: 'onChange',
        resolver: zodResolver(registerSchema)
    })

    const handleRegister = async (params: Register) => {
        const { email, password } = params
        await mutateAsync(params)
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        });
        if (res?.ok) {
            setterActionComponentAuth?.(undefined)
            return;
        }
    }
    return {
        register,
        handleSubmit,
        errors,
        isPending,
        isError,
        handleRegister
    }
}

export default useFormRegister;