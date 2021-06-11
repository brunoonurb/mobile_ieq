import { Alert } from "react-native";


function alertSucess(message: string){
    Alert.alert(message)
}

function alertWarning(message: string){
    Alert.alert(message)
}

function alertError(message: string){
    Alert.alert(message)
}

export {alertSucess, alertWarning, alertError};