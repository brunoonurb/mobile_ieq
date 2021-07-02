import { useEffect, useState } from "react";
import { Error } from "../../../interface/geral/error";
import api from "../../../services/api";
import { setToken } from "../../../services/auth";
import { ForgotPassword, ParansForgotPassword } from "../interface";

export function useForgotPassword(stateParans: ParansForgotPassword ) {

  const [error, setError] = useState<Error | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataForgotPassWord, setDataForgotPassWord] = useState<ForgotPassword>({...stateParans});



//   async function searchUser(id: string | undefined) {
//     try {
//       const { data } = await api.get(`users/${id}`);
//       setUser(data);
//     } catch (error) {
//       setError({ statusError: true, ...error.response.data });
//     }
//   }

//   const saveUser = async (newUser: User) => {
//     return action === "Cadastrar" ? registerUser(newUser) : updateUser(newUser);
//   };

  const valideCode = async (dadosforgotPassword: ForgotPassword) => {
    setLoading(true);

    try {
      const { data } = await api.post("validatePasswordCode", dadosforgotPassword);
      setError({ statusError: false, ...data });
    } catch (error) {
      const { data } = error.response;
      setError({ statusError: true, ...data });
    } finally {
      setLoading(false);
    }
  };

//   const updateUser = async (newUser: User) => {
//     const { password, ...userRefined } = newUser;
//     const userFinish = password === passwordDefault ? userRefined : newUser;

//     setLoading(true);
//     try {
//       const { id } = user;
//       const { data } = await api.put(`users/${id}`, userFinish);
//       setError({ statusError: false, ...data });
//     } catch (error) {
//       const { data } = error.response;
//       setError({ statusError: true, ...data });
//     } finally {
//       setLoading(false);
//     }
//   };

  return { dataForgotPassWord, error, loading, valideCode };
}
