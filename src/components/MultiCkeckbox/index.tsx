import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { PropsItem } from "./interfaces";
import ItemCkeckbox from "./ItemCkeckbox";

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
  fontSize?: number;
  required?: boolean;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  mode?: "dialog" | "dropdown";
  itens: PropsItem[];
  defaultValue?: string;
}

const MultiCkeckbox: React.FC<Props> = ({
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

  const sizeFont = fontSize ? fontSize : 16;
  const stylesLabel = {
    fontSize: sizeFont + 1,
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
    <SafeAreaView  style={[styles.container, stylesContanier]}>
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
              <ScrollView>
                <Controller
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, ...props },
                  }) => (
                    <ItemCkeckbox itens={itens} onChange={onChange} />
                  )}
                  name={name}
                  rules={{ required: true }}
                  defaultValue={false}
                />
                </ScrollView>
            </View>
            <View></View>
          </View>
        </View>
        <View>
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default MultiCkeckbox;

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
  ViewInput: {
    height: 100,
    width: "90%",
    marginHorizontal: "5%",
  },
  iconInput: {
    flexDirection: "row",
  },
});
