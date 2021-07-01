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
import InputSelect from "../../../../components/InputSelect";
import InputCkeckbox from "../../../../components/MultiCkeckbox";
import MultiCkeckbox from "../../../../components/MultiCkeckbox";

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
    // navagation.navigate('Welcome')
  }

  async function handleNextImput(next: string) {
    setFocus(`${next}`);
  }

  async function onSubmit(dados: User) {
    console.log(dados);

    saveUser(dados);
  }
  const pickerOptions = [
    { value: "diego3g", label: "Colaborador" },
    { value: "EliasGcf", label: "Lider" },
    { value: "EliasGcf", label: "Auxiliar Liderança" },
  ];

  const departamentoOptions = [
    { value: "diego3g", label: "EDB" },
    { value: "GMC", label: "GMC" },
    { value: "Diaconato", label: "Diaconato" },
    { label: "Tesouraria", value: "Tesouraria" },
    { value: "EBD infantil", label: "EBD infantil" },
  ];
  const itensDepartamentoOperation = [
    { checked: true, label: "GMC", value: "GMC" },
    { checked: false, label: "EDB", value: "EDB" },
    { checked: false, label: "Diaconato", value: "Diaconato" },
    { checked: true, label: "Tesouraria", value: "Tesouraria" },
    { checked: true, label: "EBD infantil", value: "EBD infantil" },
  ];

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
              keyboardType="numeric"
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
              itens={pickerOptions}
            />

            <InputSelect
              label="Departamento"
              placeholder="Selecione um departamento"
              error={errors.sector}
              control={control}
              name="sector"
              itens={departamentoOptions}
              mode="dialog"
            />

            <MultiCkeckbox
              label="Departamento de atuação"
              error={errors.sectorsActuated}
              control={control}
              name="sectorsActuated"
              itens={itensDepartamentoOperation}
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
    flexDirection:'row',
    justifyContent: "center",
    width: "100%",
    paddingBottom: 50
  },
});
