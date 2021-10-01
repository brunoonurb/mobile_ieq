import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";
import {
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Platform,
  ReturnKeyTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

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
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  editable?: boolean;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
}

const InputCuston: React.FC<Props> = ({
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
  defaultValue,
  animationEfect,
  durationEfect,
  styleEfect,
  icon,
  required,
  keyboardType = "default",
  returnKeyType = "default",
  marginLeft = 5,
  marginRight = 5,
  marginTop = 8,
  marginBottom = 8,
  editable,
  onSubmitEditing,
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
//backgroundColor: editable == false ? false: backgroundColor ? backgroundColor : colors.secondaryColor,
  const stylesBaseInput = {
    opacity: editable == false ? 0.5: 1,
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
            <View style={styles.ViewInput}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value, ...props } }) => (
                  <TextInput
                  editable={editable == false ? false: true}
                    style={[
                      styles.input,
                      stylesInput,
                      isFocused && { borderColor: colors.primaryColor },
                    ]}
                    onBlur={handleInputBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    secureTextEntry={showPassword}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    onFocus={handleInputFocus}
                    onSubmitEditing={onSubmitEditing}
                    {...props}
                  />
                )}
                name={name}
                rules={{ required: true }}
                defaultValue={defaultValue}
              />
            </View>
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
