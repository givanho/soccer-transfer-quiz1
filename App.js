import { useCallback, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-client';

import { RewardedAd, TestIds, RewardedAdEventType } from 'react-native-google-mobile-ads';
SplashScreen.preventAutoHideAsync();

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


export default function App() {
  const [loading, setLoading] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'Champions-regular': require('./assets/fonts/4181-font.ttf'),
    'Champions-bold': require('./assets/fonts/4180-font.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  const showRewardedAd = () => {
    setLoading(true);
    const rewarded = RewardedAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });

    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      rewarded.show();
    });

    const unsubscribeEarned = rewarded.addAdEventListener(
    
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
        setLoading(false)
      },
    

    );
    
    

    rewarded.load();
    

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };

  };



  const onTap = () => {
   
   
      console.log('Button tapped:');
   
  };


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
     <Text>Open up App.js to start working on your app!</Text>
        <Text style={{fontFamily:'Champions-bold', fontSize: 30 }}>Champions-bold</Text>
        <Text style={{ fontFamily:'Champions-regular',fontSize: 30 }}>Champions-regular</Text>


        
        <TouchableOpacity
        style={ { backgroundColor: '#ee2244' }}
        onPress={onTap}>
        <Text>Red button</Text>
      </TouchableOpacity>
      
     <Button title="Show Rewarded Ad" onPress={showRewardedAd} disabled={loading}/>
     {loading && <Text>Loading...</Text>}
      
        <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
