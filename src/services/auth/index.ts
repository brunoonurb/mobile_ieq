import { getItem, removeItem, setItem } from "../asyncStorage";

export const TOKEN_KEY = "@ieq-centenario:token";

const isAuthenticated = async () => {
 return getToken() !== null ? true : false;
} ;

const  getToken = async () =>
    await getItem(TOKEN_KEY)

const setToken = async (token : string) => {
   return await setItem(TOKEN_KEY, token);
};

const removeToken = async () => {
    removeItem(TOKEN_KEY);
};

export {removeToken, setToken, getToken, isAuthenticated };