import React, { useEffect, useState } from "react";
import {
    Image,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import logo from "../../../../assets/splash_ieq.png";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import { useNavigation } from "@react-navigation/core";
import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../components/Button";
import { validationSchema } from "./validate";
import { alertError, alertSucess } from "../../../../services/util/alert";
import { LoginInterface } from "../../interface";
import { useLogin } from "../../hooks/useLogin";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export function Login() {
    const navagation = useNavigation();
    const { error, loading, loginUser } = useLogin();

    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        control,
        setFocus,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        if (error === null) return;
        if (!error.statusError) return handleStart();
        if (error.statusError) return alertError("Não foi possivel Logar!");
    }, [error]);

    function handleStart() {
        navagation.navigate("home");
    }

    function handleRegister() {
        navagation.navigate("user");
    }

    function handleForgotPassword() {
        const email = getValues("email");
        navagation.navigate("forgotPassword", { email });
    }

    async function onSubmit(dados: LoginInterface) {
        loginUser(dados);
    }

    async function handleNextImput(next: string) {
        setFocus(`${next}`);
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrapper}>
                    <Image source={logo} style={styles.image} />
                    <View style={styles.form}>
                        <Input
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            returnKeyType="next"
                            keyboardType="email-address"
                            error={errors.email}
                            control={control}
                            name="email"
                            onSubmitEditing={() => handleNextImput("password")}
                        />

                        <Input
                            label="Senha"
                            placeholder="Digite sua senha"
                            returnKeyType="send"
                            keyboardType="visible-password"
                            error={errors.password}
                            control={control}
                            name="password"
                            type="password"
                            onSubmitEditing={handleSubmit(onSubmit)}
                        />
                        <TouchableOpacity
                            style={styles.forgotPassword}
                            onPress={handleForgotPassword}
                        >
                            <Text style={[styles.textForgotPassword]}>
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        title="Confirmar"
                        loading={loading}
                        onPress={handleSubmit(onSubmit)}
                    />
                    <View style={styles.register}>
                        <Text style={[styles.textRegisterView]}>
                            Ainda não tem cadastro?{" "}
                        </Text>
                        <TouchableOpacity onPress={handleRegister}>
                            <Text style={[styles.textRegister]}>
                                {" "}
                                Cadastre-se
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "space-between",
        marginTop: getStatusBarHeight(),
    },
    wrapper: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 30,
    },
    form: {
        marginVertical: 50,
    },
    image: {
        // borderColor : "#000",
        // borderWidth:3,
        height: Dimensions.get("window").height / 4,
        width: "70%",
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    register: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 40,
    },
    textRegister: {
        fontSize: 20,
        color: colors.textHeading,
        fontFamily: fonts.complemet,
        borderBottomWidth: 1,
        borderBottomColor: colors.text,
    },
    textRegisterView: {
        fontSize: 20,
        color: colors.text,
        fontFamily: fonts.complemet,
        // paddingTop: "0.5%"
    },
    forgotPassword: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        marginLeft: 25,
    },
    textForgotPassword: {
        fontSize: 14,
        color: colors.text,
        fontFamily: fonts.complemet,
        borderBottomWidth: 1,
        borderBottomColor: colors.text,
    },
});
