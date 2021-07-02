import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

import colors from "../styles/colors";
import { PlantSave } from "../pages/PlantSave";
import { MyPlants } from "../pages/MyPlants";
import { Login } from "../pages/Geral/pages/login";
import AuthRoutes from "./tab.routes";
import { Userr } from "../pages/Usuario/pages/formulario";
import { ForgotPassword } from "../pages/Geral/pages/login/forgotPassword";

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
        <stackRouter.Screen name="login" component={Login}
        options={{
            headerShown: false
          }}
          />

        <stackRouter.Screen name="forgotPassword"
         component={ForgotPassword}
         options={{
            title: 'Alterar Senha',
            headerShown: true,
          }}
         />

        <stackRouter.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRouter.Screen name="Confirmation" component={Confirmation} />

        <stackRouter.Screen name="PlantSelect" component={PlantSelect} />

        <stackRouter.Screen name="user" component={Userr}
        options={{
            title: 'Cadastrar',
            headerShown: true,
          }}/>

        <stackRouter.Screen name="home" component={AuthRoutes} />
    </stackRouter.Navigator>
);

export default AppRouter;
