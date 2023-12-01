import { useCallback, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity, SafeAreaView } from 'react-native';
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

  // const showRewardedAd = () => {
  //   setLoading(true);
  //   const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  //     requestNonPersonalizedAdsOnly: true,
  //     keywords: ['fashion', 'clothing'],
  //   });

  //   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  //     rewarded.show();
  //   });

  //   const unsubscribeEarned = rewarded.addAdEventListener(
    
  //     RewardedAdEventType.EARNED_REWARD,
  //     reward => {
  //       console.log('User earned reward of ', reward);
  //       setLoading(false)
  //     },
    

  //   );
    
    

  //   rewarded.load();
    

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };

  // };

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
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
    <View >
      <TransferQuiz />
      {/* <TextQuiz /> */}

      
        <StatusBar style="light" transculent={true} hidden={false} backgroundColor='rgba(255,255,255, 0.1)' />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: '#080a36',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
