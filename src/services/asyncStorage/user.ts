import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserLogged } from "../../pages/Geral/interface";

export const STORAGE_KEY = "@ieq-centenario:user";

const getUser = async (): Promise<UserLogged> => {
    const user = await AsyncStorage.getItem(STORAGE_KEY);
    if (user) return JSON.parse(user);

    return {
        name: "",
        email: "",
        profile: "",
        sector: "",
        sectorsActuated: [],
        sub: "",
    };
};

const setUser = async (value: UserLogged) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        return true;
    } catch (err) {
        return false;
    }
};

const removeUser = async () => {
    AsyncStorage.removeItem(STORAGE_KEY);
};

export { removeUser, setUser, getUser };
