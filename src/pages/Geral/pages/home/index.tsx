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
import { Header } from "../../../../components/Header";
import { getUser } from "../../../../services/asyncStorage/user";

export function Home() {
  const navagation = useNavigation();
  const { error, loading, loginUser } = useLogin();

  const {
    register,
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
useEffect(()=>{
    async function inici(){

        const user =await getUser()
        console.log(user);
    }
    inici()

},[])
  function handleStart() {
    // alertSucess("Logim realizado com socesoo :)!");
    navagation.navigate("MyPlants");
  }

  function handleRegister() {
    // navagation.navigate('UserIdentification')
  }

  function handleForgotPassword() {}

  async function onSubmit(dados: LoginInterface) {
    loginUser(dados);
  }

  async function handleNextImput(next: string) {
    setFocus(`${next}`)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Header/>
      <ScrollView>
        <View style={styles.wrapper}>
          {/* <Image source={logo} style={styles.image} /> */}
          <View style={styles.form}>

          </View>
          <Button
            title="Confirmar"
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          />
          <TouchableOpacity style={styles.register} onPress={handleRegister}>
            <Text style={[styles.textRegister]}>Criar nova Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    marginTop: getStatusBarHeight(),
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  form: {
    marginVertical: 50,
  },
  image: {
    // borderColor : "#000",
    // borderWidth:3,
    height: Dimensions.get("window").height / 4,
    width: "80%",
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
    marginTop: 50
  },
  textRegister: {
    fontSize: 20,
    color: colors.textHeading,
    fontFamily: fonts.complemet,
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
