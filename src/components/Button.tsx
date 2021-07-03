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
    loading?: boolean;
    marginTop?: number | string;
    marginBotton?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    paddingTop?: number | string;
    paddingBotton?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    backgroundColor?: string;
    height?: number | string;
    width?: number | string;
}
export function Button({
    height= 60,
    width =  "80%",
    backgroundColor,
    title,
    loading,
    marginTop,
    marginBotton,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBotton,
    paddingLeft,
    paddingRight,
    ...rest
}: ButtonProps) {
    const stylesContanier = {
        backgroundColor: backgroundColor ? backgroundColor : colors.primaryColor,
        marginTop,
        marginBotton,
        marginLeft,
        marginRight,
        paddingTop,
        paddingBotton,
        paddingLeft,
        paddingRight,
        height,
        width,
    };
    return (
        <TouchableOpacity
            style={[styles.contanier, stylesContanier]}
            activeOpacity={0.7}
            {...rest}
        >
            {loading && (
                <ActivityIndicator size="large" color={colors.textLight} />
            )}
            {!loading && <Text style={styles.text}> {title} </Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: colors.green,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "15%",
    },
    text: {
        fontSize: 24,
        color: colors.textLight,
        fontFamily: fonts.heading,
    },
});
