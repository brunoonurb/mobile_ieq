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
import { LoginInterface } from "../../interface/loginInterface";
import { useLogin } from "../../hooks/useLogin";
import { ScrollView } from "react-native-gesture-handler";

export function Login() {
  const navagation = useNavigation();
  const { error, loading, loginUser } = useLogin();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
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
    alertSucess("Logim realizado com socesoo :)!");
    // navagation.navigate('UserIdentification')
  }

  function handleRegister() {
    // navagation.navigate('UserIdentification')
  }

  function handleForgotPassword() {}

  async function onSubmit(dados: LoginInterface) {
    loginUser(dados);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Image source={logo} style={styles.image} />
          <View style={styles.form}>
            <Input
              label="Email"
              placeholder="Digite seu nome"
              returnKeyType="next"
              keyboardType="email-address"
              error={errors.email}
              control={control}
              name="email"
              icon="plus"
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
              marginTop={"10%"}
            />
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <Text style={[styles.textForgotPassword]}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Confirmar"
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <TouchableOpacity style={styles.register} onPress={handleRegister}>
          <Text style={[styles.textRegister]}>Criar nova Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  form: {
    marginVertical: "10%",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    marginTop: "10%",
    // marginBottom: "12%"
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
  },
  textRegister: {
    fontSize: 20,
    color: colors.text,
    fontFamily: fonts.complemet,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
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
