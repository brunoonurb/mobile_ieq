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
// import Icon from "react-native-vector-icons/FontAwesome";
// import { Input } from "react-native-elements";

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
  fontSize = 16,
  placeholder,
  backgroundColor,
  borderRadius = 10,
  color = "#000",
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

  const sizeFont = fontSize ? fontSize : 16;
  const stylesLabel = {
    fontSize: sizeFont,
  };

  const stylesInput = {
    color: color,
    fontSize: sizeFont,
  };
  const stylesIcon = {
    color: color,
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
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  // const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    // setIsFilled(!!name);
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
          <Text>{label}</Text>
        </View>
        <View>
          <View style={styles.iconInput}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value, ...props } }) => (
                <TextInput
                  style={[
                    styles.input,
                    isFocused && { borderColor: colors.primaryColor },
                  ]}
                  onBlur={onBlur}
                  // onBlur={handleInputBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  returnKeyType={returnKeyType}
                  onFocus={handleInputFocus}
                />

                
              )}
              name={name}
              rules={{ required: true }}
              defaultValue={defaultValue}
            />
             <View style={styles.icon}>
             {type === "password" && (
                      <TouchableWithoutFeedback
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        {/* <Icon
                          name={showPassword ? "eye" : "eye-slash"}
                          size={sizeFont}
                          style={[styles.icon, stylesIcon]}
                        /> */}
                        <Text style={{fontSize:24}}>{showPassword ? "#" : "*"}</Text>
                      </TouchableWithoutFeedback>
                    )
                  }
               
             </View>
          </View>
         
        </View>
        <View>
          <Text>{"tstando eoror"}</Text>
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
  viewInput: {
    flex: 10,
    alignContent: "flex-start",
  },
  viewIcon: {
    flex: 1,
    alignContent: "flex-end",
  },
  label: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  error: {
    marginLeft: 10,
    color: "red",
  },

  icon: {
    opacity: 0.8,
    width: 35,
    height: 35,
    backgroundColor: "#400",
    right:50,
    top:25,
    alignItems:"center",
    position: "relative",
  },
  iconPass: {
    opacity: 0.7,
  },
  input: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: colors.textHeading,
    color: colors.text,
    width: "90%",
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: "5%",
    padding: 5,
  },
  iconInput:{
    flexDirection: "row",
  }
});
