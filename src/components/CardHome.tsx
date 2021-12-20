import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { IFeather } from "../interface/geral/icon/IFeather";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantProps extends RectButtonProps {
    name: string;
    icon?: IFeather;
}

export function CardHome({ name, icon, ...rest }: PlantProps) {
    const stylesIcon = {
        fontSize: icon?.fontSize ? icon.fontSize : 120,
    };
    return (
        <RectButton style={styles.contanier} {...rest}>
            <Feather name={icon?.name?icon?.name: 'alert-circle'} style={[styles.icon, stylesIcon]} />
            <Text style={styles.text}>{name}</Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        maxWidth: "45%",
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
        marginHorizontal: "1%",
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        fontSize: 16,
    },
    icon: {
        borderColor: colors.primaryColor,
        borderWidth: 0.5,
        marginHorizontal: 8,
        fontSize: 120,
        color: colors.primaryColor,
    },
});
