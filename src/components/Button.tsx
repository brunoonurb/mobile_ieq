import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?:boolean;
  marginTop?: number| string;
  marginBotton?: number| string;
  marginLeft?: number| string;
  marginRight?: number| string;
  backgroundColor?: string;
}
export function Button({ backgroundColor, title, loading,marginTop, marginBotton, marginLeft, marginRight, ...rest }: ButtonProps) {

  const stylesContanier ={
    backgroundColor: backgroundColor ? backgroundColor: colors.green,
    marginTop,
    marginBotton,
    marginLeft,
    marginRight
  }
  return (
    <TouchableOpacity
    style={[styles.contanier,stylesContanier]}
    activeOpacity={0.7}
    {...rest}
    >
     {loading &&
      <ActivityIndicator size="large" color={colors.textLight} />
     }
     {!loading &&
      <Text style={styles.text}> {title} </Text>
     }

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: colors.green,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginHorizontal:'15%'
  },
  text: {
    fontSize: 24,
    color: colors.textLight,
    fontFamily: fonts.heading,
  },
});
