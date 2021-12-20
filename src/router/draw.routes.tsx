import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabHome from "./TabHome.routes";


const Drawer  = createDrawerNavigator();;

const DrawerRouter = () => {
  return (
    <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={TabHome}
        options={{ title: 'Home' }}/>
      </Drawer.Navigator>
  );
};

export default DrawerRouter;
