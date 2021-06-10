import React from "react";
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import wateringImg from "../../../../assets/splash_ieq.png";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import { useNavigation } from "@react-navigation/core";
import Input from "../../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Button } from "../../../../components/Button";

export function Login() {

  const navagation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Preencha o campo de e-mail"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Preencha o campo de senha"),
  });

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

  function handleStart(){
    navagation.navigate('UserIdentification')
  }

  async function onSubmit(dados: any) {
    console.log(dados);
    
    try{
      Alert.alert('Login sucesso')
      // await AsyncStorage.setItem('@plantmanager:user', name);
      // navagation.navigate("Confirmation",{
      //   title:'Prontinho',
      //   subtitle: `Agora vamos começar a cuidar das suas ${"\n"}
      //   plantinhas com muito cuidado.`,
      //   buttonTitle: 'Começar',
      //   icon:'smile',
      //   nextScreen: 'PlantSelect'
      // });
    }catch{
      Alert.alert('Não foi possivel salvar o seu nome. 😥')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas de
          {"\n"} forma fácil
        </Text>

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
            keyboardType="default"
            error={errors.password}
            control={control}
            name="password"
            type="password"
          />

          <Button title="Confirmar" onPress={handleSubmit(onSubmit)} />
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex:1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").height * 0.5,
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
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
