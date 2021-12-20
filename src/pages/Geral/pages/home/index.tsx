import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { CardHome } from "../../../../components/CardHome";
import { HeaderTitle } from "../../../../components/HeaderTitle";
import { alertError, alertSucess } from "../../../../services/util/alert";
import { useHome } from "../../hooks/useHome";

export function Home() {
    const navagation = useNavigation();
    const { error, loading, itens, listsItens } = useHome();

    useEffect(() => {
        if (error === null) return;
        if (error.statusError) return alertError(`${error?.message}`);
    }, [error]);
    useEffect(() => {
        listsItens();
    }, []);

    function handleScreen(screem: string) {
        alertSucess(`aqui foi um ${screem}`);
        navagation.navigate(`${screem}`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitle title="Home" />
            <ScrollView>
                <View style={styles.listItens}>
                    <FlatList
                        data={itens}
                        keyExtractor={(item) => String(item.name)}
                        renderItem={({ item }) => (
                            <CardHome
                                key={item.name}
                                name={item.name}
                                icon={{ name: item.icon }}
                                onPress={() => handleScreen(item.screen)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        onEndReachedThreshold={0.1}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "space-between",
        marginTop: getStatusBarHeight(),
    },
    wrapper: {
        flex: 1,
        flexDirection: "column",
        alignContent: "space-between",
        marginTop: getStatusBarHeight(),
    },
    listItens: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: "center",
    },
});
