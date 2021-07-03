import React, { useEffect, useState } from "react";
import {
    Image,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
    Pressable,
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
import { validatePasswordCodeSchema, validateSendEmailSchema, validationSchema } from "./validate";
import { alertError, alertSucess } from "../../../../services/util/alert";
import { LoginInterface, ParansForgotPassword } from "../../interface";
import { useLogin } from "../../hooks/useLogin";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useRoute } from "@react-navigation/native";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import CustonModal from "../../../../components/CustonModal";

export function ForgotPassword() {
    const navagation = useNavigation();
    const router = useRoute();

    const parans = router.params as ParansForgotPassword;

    const { dataForgotPassWord, error, loading, valideCode } =
        useForgotPassword(parans);

    const [modalVisible, setModalVisible] = useState(false);

    const {
        reset,
        setValue,
        handleSubmit,
        control,
        setFocus,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validateSendEmailSchema),
    });

    useEffect(() => {
        if (dataForgotPassWord !== undefined) reset(dataForgotPassWord);
    }, [dataForgotPassWord]);

    useEffect(() => {
        if (error === null) return;
        if (!error.statusError) return handleStart();
        if (error.statusError) return alertError("Não foi possivel!");
    }, [error]);

    function handleStart() {
        // alertSucess("Logim realizado com socesoo :)!");
        navagation.navigate("home");
    }

    function handleRegister() {
        navagation.navigate("user");
    }

    function handleForgotPassword() {
        setModalVisible(!modalVisible);
    }

    async function onSubmit(dados: ParansForgotPassword) {
        console.log("dados");
        console.log(dados);
        setModalVisible(false);
        return;
        valideCode(dados);
    }

    async function handleNextImput(next: string) {
        setFocus(`${next}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <CustonModal
                visible={modalVisible}
                setVisible={setModalVisible}
                closeButton={false}
                clickOffModalCloses={false}
                title="Altera senha"
                fontSizeTitle={24}
            >
                <View style={{ flexDirection: "column", marginVertical: 20 }}>
                    <Input
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        keyboardType="email-address"
                        error={errors.email}
                        control={control}
                        name="email"
                        onSubmitEditing={() => handleSubmit(onSubmit)}
                    />
                    <View style={{ alignItems: "center", marginVertical: 15 }}>
                        <Button
                            title="Enviar"
                            loading={loading}
                            onPress={(handleSubmit(onSubmit))}
                            width={200}
                        />
                    </View>
                </View>
            </CustonModal>

            <View style={styles.wrapper}>
                <View style={styles.form}>
                    {/* <Input
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        keyboardType="email-address"
                        error={errors.email}
                        control={control}
                        name="email"
                        onSubmitEditing={() => handleNextImput("password")}
                    /> */}

                    <Input
                        label="Codigo de validação"
                        placeholder="Digite codigo enviado no e-mail"
                        returnKeyType="send"
                        keyboardType="numbers-and-punctuation"
                        error={errors.codePassword}
                        control={control}
                        name="codePassword"
                        onSubmitEditing={handleSubmit(onSubmit)}
                    />
                </View>
                <Button
                    title="Enviar"
                    loading={loading}
                    onPress={handleSubmit(onSubmit)}
                />
                <Button
                    title="Opem"
                    loading={loading}
                    onPress={() => setModalVisible(true)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: colors.primaryColor,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },

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
