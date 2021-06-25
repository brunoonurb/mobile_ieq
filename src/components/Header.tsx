import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from "@expo/vector-icons";

import userImg from '../assets/bruno.png'
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export function Header() {
const [userName, setUserName] = useState<string>()
const navagation = useNavigation();
  useEffect(()=>{
    async function loadStorageuserName() {
     
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')  
    }

    loadStorageuserName();
    
  },[userName])

  function opemDraw(){
    navagation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <View style={styles.contanier}>
      <View>
        <Text style={styles.userName}>
          {/* {userName} */}
          Bruno da Silva Pedroso
        </Text>
      </View>
      <TouchableOpacity onPress={opemDraw} >
          <Feather name="menu" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getStatusBarHeight(),
  },
  buttonIcon: {
    marginHorizontal:8,
    fontSize: 32,
    color: colors.textHeading,
  },
  userName:{
    fontSize:32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight:40
  }
});
