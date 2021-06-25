import { useEffect, useState } from "react";
import { Error } from "../../../interface/geral/error";
import api from "../../../services/api";
import { setToken } from "../../../services/auth";
import { User, StateUser } from "../interface";

export function useUser(stateUser: StateUser ) {
  const [action, setAction] = useState<string>("Cadastrar");
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<Error | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const passwordDefault = "*****************";

  useEffect(() => {
    if (stateUser !== undefined) {
      setAction("Atualizar");
      const { id } = stateUser;
      searchUser(id);
    }
  }, [stateUser]);

  async function searchUser(id: string | undefined) {
    try {
      const { data } = await api.get(`users/${id}`);
      setUser(data);
    } catch (error) {
      setError({ statusError: true, ...error.response.data });
    }
  }

  const saveUser = async (usuario: User) => {
    return action === "Cadastrar" ? registerUser(usuario) : updateUser(usuario);
  };

  const registerUser = async (usuario: User) => {
    setLoading(true);

    try {
      const { data } = await api.post("users", usuario);
      setError({ statusError: false, ...data });
    } catch (error) {
      const { data } = error.response;
      setError({ statusError: true, ...data });
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (usuario: User) => {
    const { password, ...userRefined } = usuario;
    const userFinish = password === passwordDefault ? userRefined : usuario;

    setLoading(true);
    try {
      const { id } = user;
      const { data } = await api.put(`users/${id}`, userFinish);
      setError({ statusError: false, ...data });
    } catch (error) {
      const { data } = error.response;
      setError({ statusError: true, ...data });
    } finally {
      setLoading(false);
    }
  };

  return { action, user, error, loading, passwordDefault, saveUser };
}
