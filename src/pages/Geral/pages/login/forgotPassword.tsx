import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Button } from "../../../../components/Button";
import CustonModal from "../../../../components/CustonModal";
import Input from "../../../../components/Input";
import { alertError } from "../../../../services/util/alert";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import { DadosForgotPassword, ParansForgotPassword } from "../../interface";
import { validatePasswordCodeSchema } from "./validate";

export function ForgotPassword() {
    const navagation = useNavigation();
    const router = useRoute();

    const parans = router.params as ParansForgotPassword;

    const {
        dataForgotPassWord,
        error,
        loading,
        valideCode,
        forgotPasswordSendMail,
        changePasswordUser,
    } = useForgotPassword(parans);

    const [modalVisible, setModalVisible] = useState(true);
    const [changePassword, setChangePassword] = useState(false);

    const {
        reset,
        setValue,
        setError,
        handleSubmit,
        control,
        setFocus,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validatePasswordCodeSchema),
    });

    useEffect(() => {
        if (dataForgotPassWord !== undefined) reset(dataForgotPassWord);
    }, [dataForgotPassWord]);

    useEffect(() => {
        if (error === null) return;
        if (error.statusError === null) return;
        if (!error.statusError) return handleStart();
        if (error.statusError) return alertError(`${error.message}`);
    }, [error]);

    function handleStart() {
        navagation.navigate("login");
    }

    async function handleNextImput(next: string) {
        setFocus(`${next}`);
    }

    async function onSubmit(dados: DadosForgotPassword) {
        const { email } = dados;

        if (email) {
            const result = await forgotPasswordSendMail(email);
            if (result) {
                setModalVisible(false);
                return;
            }
            alertError(`${error?.message}`);
            return;
        }

        setError("email", {
            type: "manual",
            message: "Email é obrigatório",
        });
    }

    async function onSubmitValidateCode(dados: DadosForgotPassword) {
        const { codePassword } = dados;

        if (codePassword) {
            const result = await valideCode(dados);
            if (result) {
                setValue("codePassword", "");
                reset();
                setChangePassword(true);
                return;
            }
            alertError(`${error?.message}`);
            return;
        }

        setError("codePassword", {
            type: "manual",
            message: "Não foi possivel validar!",
        });
    }

    async function onSubmitConfirmPassword(dados: DadosForgotPassword) {
        const { password, confirmPassword } = dados;

        if (!password) {
            setError("password", {
                type: "manual",
                message: "Nova senha é obrigatório!",
            });
        }
        if (!confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Confirmar senha é obrigatório!",
            });
            return;
        }

        if (password && confirmPassword === password) {
            changePasswordUser(password);
            return;
        }

        if (confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Não confere com a senha!",
            });
        }
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
                        returnKeyType="send"
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
                            onPress={handleSubmit(onSubmit)}
                            width={200}
                        />
                    </View>
                </View>
            </CustonModal>

            <View style={styles.wrapper}>
                {changePassword === false ? (
                    <>
                        <View style={styles.form}>
                            <Input
                                label="Codigo de validação"
                                placeholder="Digite codigo enviado no e-mail"
                                returnKeyType="send"
                                keyboardType="numbers-and-punctuation"
                                error={errors.codePassword}
                                control={control}
                                name="codePassword"
                                onSubmitEditing={handleSubmit(
                                    onSubmitValidateCode
                                )}
                            />

                            <TouchableOpacity
                                style={styles.forgotPassword}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={[styles.textForgotPassword]}>
                                    Reenviar codigo verificador
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                            title="Enviar"
                            loading={loading}
                            onPress={handleSubmit(onSubmitValidateCode)}
                        />
                    </>
                ) : (
                    <>
                        <View style={[styles.form]}>
                            <Input
                                label="Senha"
                                placeholder="Digite sua senha"
                                returnKeyType="next"
                                keyboardType="visible-password"
                                error={errors.password}
                                control={control}
                                name="password"
                                type="password"
                                onSubmitEditing={() =>
                                    handleNextImput("confirmPassword")
                                }
                            />
                            <Input
                                label="Confirmar Senha"
                                placeholder="Digite sua senha"
                                returnKeyType="send"
                                keyboardType="visible-password"
                                error={errors.confirmPassword}
                                control={control}
                                name="confirmPassword"
                                type="password"
                                onSubmitEditing={() =>
                                    handleSubmit(onSubmitConfirmPassword)
                                }
                            />
                        </View>
                        <Button
                            title="Alterar"
                            loading={loading}
                            onPress={handleSubmit(onSubmitConfirmPassword)}
                        />
                    </>
                )}
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
