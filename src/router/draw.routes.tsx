import React from "react";
import { Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import colors from "../styles/colors";
import { PlantSelect } from "../pages/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../pages/MyPlants";
import { Welcome } from "../pages/Welcome";
import { Home } from "../pages/Geral/pages/home";
import { Userr } from "../pages/Usuario/pages/formulario";
import AuthRoutes from "./tab.routes";

const Drawer  = createDrawerNavigator();;

const DrawerRouter = () => {
  return (
    <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="Welcome-22" component={Welcome} />
      </Drawer.Navigator>
  );
};

export default DrawerRouter;
