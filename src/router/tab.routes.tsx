import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../styles/colors";
import { PlantSelect } from "../pages/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../pages/MyPlants";
import { Welcome } from "../pages/Welcome";
import { Home } from "../pages/Geral/pages/home";
import { Userr } from "../pages/Usuario/pages/formulario";
import DrawerRouter from "./draw.routes";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primaryColor,
        inactiveTintColor: colors.heading,
        labelStyle: {
            fontSize: 12,
            paddingBottom: "8%"
          },
        labelPosition: "below-icon",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 62,
          paddingTop:'1%'
        },
      }}
    >
      <AppTab.Screen
        name="Home"
        component={DrawerRouter}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="home" size={ focused ? size + 5 : size } color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Pesquisa"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="search" size={ focused ? size + 5 : size } color={color} />
          ),
        }}
      />
      <AppTab.Screen
        name="Calendario"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="event"
              size={ focused ? size + 20 : size + 18 }
              color={color}
              style={{
                backgroundColor: "#fff",
                borderColor: color,
                borderWidth: 1,
                borderRadius: 50,
                padding: 20,
                position: 'absolute'
              }}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Notificações"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name="notification-important"
              size={ focused ? size + 5 : size }
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Perfil"
        component={Userr}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons name="person" size={ focused ? size + 5 : size } color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
