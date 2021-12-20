import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../pages/Geral/pages/home";
import { Userr } from "../pages/Usuario/pages/formulario";
import colors from "../styles/colors";

const StackRouter = createStackNavigator();

const StackHome: React.FC = () => (
    <StackRouter.Navigator
        // headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,
            },
        }}
    >
        <StackRouter.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}
        />
        <StackRouter.Screen name="Chamada" component={Userr} />
        <StackRouter.Screen name="Relatorio" component={Userr} />
        <StackRouter.Screen name="Escala" component={Userr} />
        <StackRouter.Screen name="Minha Escala" component={Userr} />
    </StackRouter.Navigator>
);

export default StackHome;
