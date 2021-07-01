import CheckBox from "@react-native-community/checkbox";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface PropsItens {
  label: string | undefined;
  value: string | number | undefined;
}

interface Props {
  error?: FieldError;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  color?: string;
  backgroundColor?: string;
  control?: any;
  textoAjuda?: string;
  borderRadius?: number;
  animationEfect?: string;
  durationEfect?: number;
  styleEfect?: any;
  icon?: string;
  fontSize?: number;
  required?: boolean;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  itens: PropsItens[];
  defaultValue?: string;
}

const InputCkeckbox: React.FC<Props> = ({
  name,
  type,
  label,
  fontSize = 17,
  placeholder,
  backgroundColor,
  borderRadius = 10,
  color,
  control,
  error,
  textoAjuda,
  animationEfect,
  durationEfect,
  styleEfect,
  icon,
  required,
  marginLeft = 5,
  marginRight = 5,
  marginTop = 8,
  marginBottom = 8,
  itens,
  defaultValue,
  ...props
}) => {
  const sizeFont = fontSize ? fontSize : 16;
  const stylesLabel = {
    fontSize: sizeFont + 1,
  };

  const stylesInput = {
    color: color ? color : colors.text,
    fontSize: sizeFont,
  };
  const stylesBaseInput = {
    backgroundColor: backgroundColor ? backgroundColor : colors.secondaryColor,
    color: color ? color : colors.text,
    borderRadius: borderRadius,
    borderWidth: 0.4,
    borderColor: colors.text,
  };

  const stylesContanier = {
    width: "100%",
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, stylesContanier]}
    >
      <Animatable.View
        animation={animationEfect}
        duration={durationEfect}
        style={[styles.baseInput, stylesBaseInput, styleEfect]}
      >
        <View>
          <Text style={[styles.label, stylesLabel]}>{label}</Text>
        </View>
        <View>
          <View style={styles.iconInput}>
            <View style={styles.ViewInput}>
              <View style={styles.checkboxContainer}>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ...props },
                  }) => (
                    <CheckBox
                      value={value}
                      onValueChange={(value) => onChange([value])}
                      style={[styles.checkbox]}
                      {...props}
                    />
                  )}
                  name={name}
                  rules={{ required: true }}
                  defaultValue={false}
                />
                <Text style={styles.labelCheckbox}> {placeholder}</Text>
              </View>
            </View>
            <View></View>
          </View>
        </View>
        <View>
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

export default InputCkeckbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  labelCheckbox: {
    margin: 0,
  },
  baseInput: {
    flexDirection: "column",
    marginHorizontal: 10,
    shadowColor: "#000",
  },
  label: {
    marginLeft: 10,
    color: colors.textHeading,
    fontWeight: "bold",
  },
  error: {
    alignItems: "center",
    paddingBottom: 3,
    marginLeft: 18,
    color: colors.errorColor,
    fontSize: 12,
  },
  icon: {
    opacity: 0.8,
    width: 35,
    height: 35,
    right: 20,
    alignItems: "center",
    position: "absolute",
  },
  iconPass: {
    opacity: 0.7,
  },
  input: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: colors.text,
    color: colors.text,
    fontSize: 18,
    paddingHorizontal: 5,
    paddingBottom: 0,
    fontFamily: fonts.text,
  },
  ViewInput: {
    height: 30,
    width: "90%",
    marginHorizontal: "5%",
  },
  iconInput: {
    flexDirection: "row",
  },
});
