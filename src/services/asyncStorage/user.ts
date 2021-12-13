import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserLogged } from "../../pages/Geral/interface";

export const STORAGE_KEY = "@ieq-centenario:user";

const getUser = async () => await AsyncStorage.getItem(STORAGE_KEY);

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
