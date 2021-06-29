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
  mode?: "dialog" | "dropdown";
  itens: PropsItens[];
  defaultValue?: string;
}

const InputSelect: React.FC<Props> = ({
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
  mode = "dropdown",
  itens,
  defaultValue,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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

  function handlePassword() {
    setShowPassword(!showPassword);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

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
          <View style={[styles.ViewInput, isFocused && { borderColor: colors.primaryColor }]}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value, ...props } }) => (
                <Picker
                  selectedValue={value}
                  style={[
                    styles.input,
                    stylesInput
                  ]}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  itemStyle={stylesInput}
                  onValueChange={(value) => onChange(value)}
                  mode={mode}
                  {...props}
                >
                  <Picker.Item
                    enabled={false}
                    label={placeholder ? placeholder : "Selecione"}
                    value={undefined}
                  />
                  {itens.map((item, indice) => (
                    <Picker.Item
                      key={indice}
                      style={styles.itens}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Picker>
              )}
              name={name}
              rules={{ required: true }}
              defaultValue={defaultValue}
            />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

export default InputSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
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

  iconPass: {
    opacity: 0.7,
  },
  input: {
    color: colors.text,
    paddingBottom:"10.5%"
  },
  ViewInput:{
    borderBottomWidth: 1,
    borderColor: colors.text,
    height: 30,
    width: "90%",
    marginHorizontal: "5%",
  },
  itens: {
    paddingVertical: 50,
  },

  iconInput: {
    flexDirection: "row",
  },
});
