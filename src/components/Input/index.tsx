import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";
import {
  Dimensions,
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  Platform,
  ReturnKeyType,
  ReturnKeyTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";

interface Props {
  error?: FieldError;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  color?: string;
  backgroundColor?: string;
  defaultValue?: string;
  control?: any;
  textoAjuda?: string;
  borderRadius?: number;
  animationEfect?: string;
  durationEfect?: number;
  styleEfect?: any;
  icon?: string;
  fontSize?: number;
  required?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
}

const InputCuston: React.FC<Props> = ({
  name,
  type,
  label,
  fontSize = 20,
  placeholder,
  backgroundColor,
  borderRadius = 7,
  color,
  control,
  error,
  textoAjuda,
  defaultValue,
  animationEfect,
  durationEfect,
  styleEfect,
  icon,
  required,
  keyboardType = "default",
  returnKeyType = "default",
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
  const stylesIcon = {
    color: color ? color : colors.text,
    fontSize: sizeFont,
  };

  const stylesBaseInput = {
    backgroundColor: backgroundColor ? backgroundColor : colors.secondaryColor,
    color: color ? color : colors.text,
    borderRadius: borderRadius,
    borderWidth: 0.2,
    borderColor: "#000",
  };

  const stylesContanier = {
    width: "100%",
    marginVertical: 5,
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
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value, ...props } }) => (
                <TextInput
                  style={[
                    styles.input,
                    stylesInput,
                    isFocused && { borderColor: colors.primaryColor },
                  ]}
                  // onBlur={onBlur}
                  onBlur={handleInputBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  returnKeyType={returnKeyType}
                  onFocus={handleInputFocus}
                  {...props}
                />
              )}
              name={name}
              rules={{ required: true }}
              defaultValue={defaultValue}
            />
            <View>
              {type === "password" && (
                <TouchableWithoutFeedback
                  containerStyle={styles.icon}
                  onPress={() => handlePassword()}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    style={[stylesIcon]}
                  />
                </TouchableWithoutFeedback>
              )}
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

export default InputCuston;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  baseInput: {
    flexDirection: "column",
    marginHorizontal: 10,
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
    right: 55,
    alignItems: "center",
    position: "relative",
  },
  iconPass: {
    opacity: 0.7,
  },
  input: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: colors.text,
    color: colors.text,
    width: "90%",
    fontSize: 18,
    marginHorizontal: "5%",
    paddingHorizontal: 5,
    paddingBottom: 0,
  },
  iconInput: {
    flexDirection: "row",
  },
});
