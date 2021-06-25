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

import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import { useNavigation } from "@react-navigation/core";
import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../../components/Button";
import { userSchema } from "./validate";
import { alertError, alertSucess } from "../../../../services/util/alert";
import { LoginInterface, StateUser, User } from "../../interface";
import { useUser } from "../../hooks/useUser";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../../../components/Header";

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
    if (error.statusError) return alertError("Não foi possivel Logar!");
  }, [error]);

  function handleStart() {
    alertSucess("Logim realizado com socesoo :)!");
    // navagation.navigate('Welcome')
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
        <View style={styles.header}>
          <Text style={styles.title}>{action} usúario</Text>
        </View>
          <View style={styles.form}>
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              returnKeyType="next"
              keyboardType="default"
              error={errors.nome}
              control={control}
              name="nome"
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
              onSubmitEditing={() => handleNextImput("profile")}
            />

            <Input
              label="Perfil"
              placeholder="Digite seu perfil"
              returnKeyType="next"
              keyboardType="default"
              error={errors.profile}
              control={control}
              name="profile"
              onSubmitEditing={() => handleNextImput("sector")}
            />

            <Input
              label="Setor"
              placeholder="Digite seu setor"
              returnKeyType="next"
              keyboardType="default"
              error={errors.sector}
              control={control}
              name="sector"
            />
          </View>
          <Button
            title="Confirmar"
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 0,
  },
  form: {
    marginVertical: 50,
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
});
