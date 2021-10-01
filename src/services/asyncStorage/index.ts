import AsyncStorage from "@react-native-async-storage/async-storage";

const getItem = async (item: string) => await AsyncStorage.getItem(item);

const setItem = async (item: string, value: string) => {
    try {
        await AsyncStorage.setItem(item, value);
        return true;
    } catch (err) {
        return false;
    }
};

const removeItem = async (item: string) => {
    AsyncStorage.removeItem(item);
};

export { removeItem, setItem, getItem };
