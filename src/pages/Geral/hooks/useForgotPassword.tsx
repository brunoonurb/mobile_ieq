import { useState } from "react";
import { Error } from "../../../interface/geral/error";
import api from "../../../services/api";
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
                "validatePasswordCode",
                dadosforgotPassword
            );
            setIdUser(data.user.id);
            setError({ statusError: null, ...data });
            return true;
        } catch (error) {
            const { data } = error.response;
            setError({ statusError: null, ...data });
            return false;
        } finally {
            setLoading(false);
        }
    };

    const forgotPasswordSendMail = async (email: string) => {
        setLoading(true);

        try {
            const { data } = await api.post("forgotPassword", { email });
            setError({ statusError: null, ...data });
            return true;
        } catch (error) {
            const { data } = error.response;
            setError({ statusError: null, ...data });
            return false;
        } finally {
            setLoading(false);
        }
    };

    const changePasswordUser = async (password: string) => {
        setLoading(true);

        try {
            const { data } = await api.put(`resetPassword/${idUser}`, {
                password,
            });
            setError({ statusError: false, ...data });
        } catch (error) {
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
