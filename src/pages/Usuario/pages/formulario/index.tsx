import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../../../components/Button";
import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import MultiCkeckbox from "../../../../components/MultiCkeckbox";
import { alertError, alertSucess } from "../../../../services/util/alert";
import {
    profile,
    sectores,
    sectorsActuated,
} from "../../../../services/util/global/globalValues";
import { useUser } from "../../hooks/useUser";
import { StateUser, User } from "../../interface";
import { userSchema } from "./validate";

export function Userr() {
    const navagation = useNavigation();
    const router = useRoute();

    const parans = router.params as StateUser;

    const { action, user, error, loading, passwordDefault, saveUser } =
        useUser(parans);

    const {
        register,
        setFocus,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    useEffect(() => {
        if (user !== null) {
            reset(user);
            setValue("password", passwordDefault);
        }
    }, [user]);

    useEffect(() => {
        if (error === null) return;
        if (!error.statusError) return handleStart();
        if (error.statusError) return alertError(error.message);
    }, [error]);

    function handleStart() {
        alertSucess("Usúario cadastrado com sucesso)!");
        navagation.navigate("login");
    }

    async function handleNextImput(next: string) {
        setFocus(`${next}`);
    }

    async function onSubmit(dados: User) {
        saveUser(dados);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrapper}>
                    <View style={styles.form}>
                        <Input
                            label="Nome"
                            placeholder="Digite seu nome"
                            returnKeyType="next"
                            keyboardType="default"
                            error={errors.name}
                            control={control}
                            name="name"
                            onSubmitEditing={() => handleNextImput("email")}
                        />

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
                            returnKeyType="next"
                            keyboardType="visible-password"
                            error={errors.password}
                            control={control}
                            name="password"
                            type="password"
                            onSubmitEditing={() => handleNextImput("phone")}
                        />

                        <Input
                            label="Telefone"
                            placeholder="Digite seu telefone"
                            returnKeyType="next"
                            keyboardType="numeric"
                            error={errors.phone}
                            control={control}
                            name="phone"
                            onSubmitEditing={() => handleNextImput("profile")}
                        />

                        <InputSelect
                            label="Cargo"
                            placeholder="Selecione um perfil"
                            error={errors.profile}
                            control={control}
                            name="profile"
                            itens={profile}
                        />

                        <InputSelect
                            label="Departamento"
                            placeholder="Selecione um departamento"
                            error={errors.sector}
                            control={control}
                            name="sector"
                            itens={sectores}
                            mode="dialog"
                        />

                        <MultiCkeckbox
                            label="Departamento de atuação"
                            error={errors.sectorsActuated}
                            control={control}
                            name="sectorsActuated"
                            itens={sectorsActuated}
                            widthItem="50%"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Confirmar"
                            loading={loading}
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 0,
    },
    form: {
        marginVertical: 25,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        paddingBottom: 50,
    },
});
