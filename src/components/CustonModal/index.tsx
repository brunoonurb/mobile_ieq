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

interface Props {
    title?: string;
    label?: string;
    color?: string;
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
    setVisible: (...event: any[]) => void;
}

const CustonModal: React.FC<Props> = ({
    title,
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
            onRequestClose={() => {
                handleVisibleModal(!visible);
            }}
        >
            <TouchableWithoutFeedback onPress={() => handleVisibleModal(true)}>
                <View style={styles.modalContainer}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, styleBaseModal]}>
                            <TouchableOpacity
                                onPress={() => handleVisibleModal(true)}
                                style={styles.closeModal}
                            >
                                <Text
                                    style={{
                                        color: "#000",
                                        fontSize: 20,
                                    }}
                                >
                                    x
                                </Text>
                            </TouchableOpacity>
                            {children}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        // paddingTop: 0,
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

    modalContainer: {
        height: Dimensions.get("window").height,
        backgroundColor: "rgba(0,0,0, 0.5)",
    },
    closeModal: {
        width: 20,
        marginLeft: Dimensions.get("window").width / 2 + 125,
    },
});

export default CustonModal;
