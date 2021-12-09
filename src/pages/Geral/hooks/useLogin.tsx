import { useState } from "react";
import { Error } from "../../../interface/geral/error";
import api from "../../../services/api";
import { setToken } from "../../../services/auth";
import { LoginInterface } from "../interface";

export function useLogin() {
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function loginUser(dados: LoginInterface) {
        setLoading(true);

        try {
            const { data } = await api.post(`/v1/auth/login`, dados);
            const result = await setToken(data.token);
            if (!result) {
                setError({
                    statusError: true,
                    status: 401,
                    message: "Não foi possível iniciar sessão!",
                });
            }

            setError({ statusError: false, ...data });
        } catch (err: any) {
            const { data } = err.response;
            setError({ statusError: true, ...data });
        } finally {
            setLoading(false);
        }
    }
    return { error, loading, loginUser };
}
