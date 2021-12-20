import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface HeaderTitlePros {
    title?: string;
}
export function HeaderTitle({ title = "" }: HeaderTitlePros) {
    const navagation = useNavigation();

    function goBlack() {
        navagation.goBack();
    }

    return (
        <View style={styles.contanier}>
            <TouchableOpacity onPress={goBlack}>
                <Feather
                    name={title === "Home" ? "home" : "arrow-left"}
                    style={styles.buttonIcon}
                />
            </TouchableOpacity>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={goBlack}>
                <Feather name="log-out" style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contanier: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getStatusBarHeight() / 5,
    },
    buttonIcon: {
        marginHorizontal: 8,
        fontSize: 25,
        color: colors.textHeading,
    },
    viewTitle: {
        alignContent: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
});
