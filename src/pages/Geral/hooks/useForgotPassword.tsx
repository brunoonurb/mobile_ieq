import { useState } from "react";
import { Error } from "../../../interface/geral/error";
import api from "../../../services/api";
import { setUser } from "../../../services/asyncStorage/user";
import { setToken } from "../../../services/auth";
import { DadosForgotPassword, ParansForgotPassword } from "../interface";

export function useForgotPassword(stateParans: ParansForgotPassword) {
    const [error, setError] = useState<Error | any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [dataForgotPassWord, setDataForgotPassWord] =
        useState<DadosForgotPassword>({ ...stateParans });
    const [idUser, setIdUser] = useState<String>();
    const valideCode = async (dadosforgotPassword: DadosForgotPassword) => {
        setLoading(true);
        setDataForgotPassWord(dadosforgotPassword);
        try {
            const { data } = await api.post(
                "/v1/auth/validatePasswordCode",
                dadosforgotPassword
            );

            const result = await setToken(data.token);
            setUser(data.user)
            if (!result) {
                setError({
                    statusError: true,
                    status: 401,
                    message: "Não foi possível iniciar sessão!",
                });
                return false;
            }
            setIdUser(data.user.sub);
            setError({ statusError: null, ...data });
            return true;
        } catch (error: any) {
            const { data } = error.response;
            setError({ statusError: true, ...data });
            return false;
        } finally {
            setLoading(false);
        }
    };

    const forgotPasswordSendMail = async (email: string) => {
        setLoading(true);

        try {
            const { data } = await api.post("/v1/auth/forgotPassword", {
                email,
            });
            setError({ statusError: null, ...data });
            return true;
        } catch (error: any) {
            const { data } = error.response;

            setError({ statusError: true, ...data });
            return false;
        } finally {
            setLoading(false);
        }
    };

    const changePasswordUser = async (password: string) => {
        setLoading(true);

        try {
            const { data } = await api.put(
                `/v1/users/${idUser}/resetPassword`,
                {
                    password,
                }
            );
            setError({ statusError: false, ...data });
        } catch (error: any) {
            const { data } = error.response;
            setError({ statusError: true, ...data });
        } finally {
            setLoading(false);
        }
    };

    return {
        dataForgotPassWord,
        error,
        loading,
        valideCode,
        forgotPasswordSendMail,
        changePasswordUser,
    };
}
