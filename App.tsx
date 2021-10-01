import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'

import Routes from './src/router';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from "@expo-google-fonts/jost";

export default function App() {

    // useEffect(() => {
    //     async function updateApp() {
    //       const { isAvailable } = await Updates.checkForUpdateAsync();
    //       if (isAvailable) {
    //         await Updates.fetchUpdateAsync();
    //         await Updates.reloadAsync(); // depende da sua estratégia
    //       }
    //     }
    //     updateApp();
    //   }, []);

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded) return <AppLoading/>
  return (
  <Routes/>
  );
}

