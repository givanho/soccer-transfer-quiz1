import { useCallback, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity, } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-client';
import TransferQuiz from './categories/transfers/TransferQuiz';
// import TextQuiz from './categories/transfers/TextQuiz';
import GameOver from './GameOver'
// import { RewardedAd, TestIds, RewardedAdEventType } from 'react-native-google-mobile-ads';
SplashScreen.preventAutoHideAsync();

// const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


export default function App() {
  // const [loading, setLoading] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    'Champions-regular': require('./assets/fonts/4181-font.ttf'),
    'Champions-bold': require('./assets/fonts/4180-font.ttf'),
    'germany': require('./assets/fonts/Regermany2006-x4Jq.ttf'),
    'russia': require('./assets/fonts/RussiaFive-g1eq.ttf'),
    'score': require('./assets/fonts/FtyStrategycideNcv-elGl.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();

    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };


  return (
   
    <View style={styles.container} onLayout={onLayoutRootView}>
      
    
      <View style={styles.fullScreen}>
       <StatusBar backgroundColor='rgba(247, 15, 255, 0)' style='' hidden={false}/>
       <SafeAreaView >
        <TransferQuiz />
        </SafeAreaView>
      </View>
      {/* <TextQuiz /> */}
    </View>
   
      
);
}

const styles = StyleSheet.create({
container: {
  
  paddingTop:-20,
  flex:1
},
fullScreen: {
  ...StyleSheet.absoluteFillObject,
  
  
},
});
