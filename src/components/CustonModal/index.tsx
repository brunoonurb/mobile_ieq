import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface Props {
    title?: string;
    label?: string;
    color?: string;
    fontSizeTitle?: number;
    backgroundColor?: string;
    shadowColor?: string;
    borderRadius?: number;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    animationType?: "none" | "slide" | "fade";
    transparent?: boolean;
    statusBarTranslucent?: boolean;
    presentationStyle?:
        | "fullScreen"
        | "pageSheet"
        | "formSheet"
        | "overFullScreen";
    hardwareAccelerated?: boolean;
    onShow?: (...event: any[]) => void;
    onRequestClose?: (...event: any[]) => void;
    onOrientationChange?: (...event: any[]) => void;
    onDismiss?: (...event: any[]) => void;
    visible: boolean;
    closeButton?: boolean;
    clickOffModalCloses?: boolean;
    setVisible: (...event: any[]) => void;
}

const CustonModal: React.FC<Props> = ({
    title,
    fontSizeTitle,
    color,
    backgroundColor = "#fff",
    shadowColor = "#000",
    borderRadius = 10,
    paddingLeft,
    paddingRight,
    paddingTop = 0,
    paddingBottom,
    animationType = "slide",
    transparent = false,
    statusBarTranslucent,
    presentationStyle,
    hardwareAccelerated,
    onShow,
    onRequestClose,
    onOrientationChange,
    onDismiss,
    visible,
    closeButton = true,
    clickOffModalCloses = true,
    setVisible,
    children,
    ...props
}) => {
    const styleBaseModal = {
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        shadowColor: shadowColor,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
    };
    const styleTitle ={
        fontSize : fontSizeTitle ? fontSizeTitle : 16
    }

    function handleVisibleModal(visible: boolean) {
        setVisible(!visible);
    }

    return (
        <Modal
            statusBarTranslucent={statusBarTranslucent}
            presentationStyle={presentationStyle}
            hardwareAccelerated={hardwareAccelerated}
            animationType={animationType}
            transparent={transparent}
            visible={visible}
        >
            <ScrollView>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback
                        onPress={() =>
                            clickOffModalCloses ? handleVisibleModal(true) : ""
                        }
                    >
                        <View style={styles.flexModal}></View>
                    </TouchableWithoutFeedback>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, styleBaseModal]}>
                            <View style={styles.viewCloseModal}>
                            <Text style={[styles.title, styleTitle]}>{title}</Text>
                                <View style={styles.closeModal}>

                                    {closeButton && (
                                        <TouchableOpacity
                                            onPress={() =>
                                                handleVisibleModal(true)
                                            }
                                        >
                                            <View style={styles.close}>
                                                <Text
                                                    style={[
                                                        {
                                                            color: "#000",
                                                            fontSize: 20,
                                                            borderStyle:
                                                                "solid",
                                                        },
                                                    ]}
                                                >
                                                    x
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>

                            {children}
                        </View>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() =>
                            clickOffModalCloses ? handleVisibleModal(true) : ""
                        }
                    >
                        <View style={styles.flexModal}></View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        height: Dimensions.get("window").height,
        backgroundColor: "rgba(0,0,0, 0.5)",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    flexModal: {
        flex: 1,
    },

    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    title:{
        marginTop:5,
        marginLeft:10,
        color: colors.textDark,
        fontFamily: fonts.heading,
    },
    viewCloseModal: {
        marginBottom: 5,
        flexDirection: "row",
    },
    closeModal: {
        flex: 1,
        marginVertical: 5,
        alignItems: "flex-end",
    },
    close: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 25,
        height: 25,
    },
});

export default CustonModal;
