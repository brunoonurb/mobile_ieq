import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login } from "../pages/Geral/pages/login";
import { ForgotPassword } from "../pages/Geral/pages/login/forgotPassword";
import { Userr } from "../pages/Usuario/pages/formulario";
import colors from "../styles/colors";
import TabHome from "./TabHome.routes";

const stackRouter = createStackNavigator();

const AppRouter: React.FC = () => (
    <stackRouter.Navigator
        // headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,
            },
        }}
    >
        <stackRouter.Screen
            name="login"
            component={Login}
            options={{
                headerShown: false,
            }}
        />

        <stackRouter.Screen
            name="forgotPassword"
            component={ForgotPassword}
            options={{
                title: "Alterar Senha",
                headerShown: true,
            }}
        />

        <stackRouter.Screen
            name="user"
            component={Userr}
            options={{
                title: "Cadastrar",
                headerShown: true,
            }}
        />

        <stackRouter.Screen
            name="home"
            component={TabHome}
            options={{
                headerShown: false,
            }}
        />
    </stackRouter.Navigator>
);

export default AppRouter;
