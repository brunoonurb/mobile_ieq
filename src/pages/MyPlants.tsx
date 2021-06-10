import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/core";
import { format, formatDistance, isBefore } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import waterdrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { loadPlant, PlantProps, savePlant } from "../libs/storage";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function MyPlants() {
  const navagation = useNavigation();
  const [myPlants, setMyPlants] = useState<PlantProps[]>();
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();
  
  useEffect(()=>{
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(), new Date,
        {locale: pt}
      );
      setNextWaterd(`Não esqueça de regar a${plantsStoraged[0].name} à ${nextTime} horas`)
      setMyPlants(plantsStoraged)
    }
    loadStorageData()
  },[])

  function handleChangePickerAndroid() {

  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.spotlight}>
        <SvgFromUri uri={waterdrop} 
        style={styles.spotlightImage}
        height={150} 
        width={1500} 
        />
        <Text style={styles.spotlightText}>
          {nextWaterd}
          </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Proximas regasta
          </Text>

          {/* <FlatList
          data
          /> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop:50,
    backgroundColor: colors.background,
  },
  spotlight: {

  },
  spotlightImage: {
  
  },
  spotlightText: {
   
  },
  plants: {
 
  },
  plantsTitle: {
   
  },
});
