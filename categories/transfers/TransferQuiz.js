import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from 'expo-av';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quizdata from "./questions";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { BannerAd, BannerAdSize, TestIds, RewardedAd,  RewardedAdEventType } from 'react-native-google-mobile-ads';
import GameOver from '../../GameOver'
import UseHints from '../../UseHints'
import {vw} from '../../Dimensions'
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const adUnitIds = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const stadium =  require("../../assets/championsback.jpg");
const arrow =  require("../../assets/newarrow.png");
const shoes =  require("../../assets/football2.png");
const champ =  require("../../assets/trophy2.png");
const share =  require("../../assets/kick.png");
const hintvid =  require("../../assets/play.png");
const badge =  require("../../assets/nnbadge.png");
const foul =  require("../../assets/red-card.png");
const playagain =  require("../../assets/football-game.png");



const TransferQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [hint, setHint]= useState(30)
  const [nohint, setNoHint]= useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);
  const [dataLoaded, setDataLoaded] = useState(false);
  //timer function
  const initialTime = 10; //10 seconds
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);
  const [paused, setPaused] = useState(false);

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [overVisible, setOverVisible] = useState(false);

  // sound
  const [sound1, setSound1] = useState();
  const [sound2, setSound2] = useState();
// 550/50
const [userClicked, setUserClicked] = useState(false);
const [eliminatedOptions, setEliminatedOptions] = useState([]);


  //async storage
  useEffect(() => {
    // Load stored data on component mount
    loadUserData();
  }, []);


  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('highScore', String(highScore));
      await AsyncStorage.setItem('hint', String(hint));
      await AsyncStorage.setItem('currentQuestion', String(currentQuestion));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };
  const loadUserData = async () => {
    try {
      const savedScore = await AsyncStorage.getItem('highScore');
     const savedHints = await AsyncStorage.getItem('hint');
      const savedCurrentQuestion = await AsyncStorage.getItem('currentQuestion');

  setHighScore(savedScore ? parseInt(savedScore, 10) : 0);

      setHint(savedHints ? parseInt(savedHints, 10) : 0);
      setCurrentQuestion(savedCurrentQuestion ? parseInt(savedCurrentQuestion, 10) : 0);
      setDataLoaded(true);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

// audio

useEffect(() => {
  // Load the first sound file
  const loadSound1 = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/correctanswer.mp3')
    );
    setSound1(sound);
  };

  // Load the second sound file
  const loadSound2 = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/wronganswer.mp3')
    );
    setSound2(sound);
  };

  loadSound1();
  loadSound2();

  // Unload the sound resources when the component unmounts
  return () => {
    if (sound1) {
      sound1.unloadAsync();
    }
    if (sound2) {
      sound2.unloadAsync();
    }
  };
}, []);

const rightAnswer = async () => {
  if (sound1) {
    await sound1.replayAsync();
  }
};

const wrongAnswer = async () => {
  if (sound2) {
    await sound2.replayAsync();
  }
};


  //answer function
  const handleAnswer = (option) => {
    const correctAnswer = quizdata[currentQuestion].answer;
    if (option === correctAnswer) {
      rightAnswer();
      setScore(score + 1);
      if(highScore < score){
        setHighScore(score + 1)
      }
    } else {
      wrongAnswer()
    overModalOn();
    saveUserData();
    }
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    handleReset();
    saveUserData();
    if (currentQuestion === quizdata.length - 1) {
      setCurrentQuestion(0);
    }
  };

  //handle 50/50 answer
  const shuffleArray = (array) => {
    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fiftyFifty = (options) => {
    const correctAnswer = quizdata[currentQuestion].answer;
    setUserClicked(true);
  const  remainingOptions = options.filter((option) => option !== correctAnswer).slice(0, 1);
    
    const newOptions = shuffleArray([correctAnswer, ...remainingOptions]);
    setEliminatedOptions(newOptions)
   
  };





  //google reward Ad
  const showRewardedAd = (replay) => {
    setLoading(true);
    const rewarded = RewardedAd.createForAdRequest(adUnitIds, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });

    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      rewarded.show();
    });

    const unsubscribeEarned = rewarded.addAdEventListener(
    
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        if(replay == 2){
          if (currentQuestion === quizdata.length - 1) {
            setCurrentQuestion(0);
            handleReset();
            setIsActive(true);

          }
          else{
            setCurrentQuestion(currentQuestion + 1);
            handleReset();
         setIsActive(true);

          }
          setLoading(false)
          overModalOff();
        }
        else{
           console.log('User earned reward of ', reward);
        setHint((prev) => prev +10)
        setLoading(false)
        if(replay==3){
        setIsActive(false);
          
        }
        else{
        setIsActive(true);
        }
        }
       
      },
    

    );
    

    rewarded.load();
    

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };


  };

  //timer effect
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setIsActive(false);
            // Handle quiz time expiration here
            overModalOn();
            saveUserData();
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);
  

  const handlePauseResume = () => {
    if(hint < 1){
      console.log('out of hints');
      setPaused(true);
      } else{
         setIsActive(false);
    setPaused(true);
    hintLogic(1);
      }
   
   
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsActive(true);
    setPaused(false);
  };

  //Hint Modal
  const modalOn = () => {
    setIsModalVisible(true);
    setIsActive(false);
  };

  const modalOff = () => {
    
    setIsModalVisible(false);
    setIsActive(true);
  };

  //Over Modal
  const overModalOn = () => {
    setOverVisible(true);
    setIsActive(false)
    saveUserData();
  };

  const overModalOff = () => {
    setOverVisible(false);
    setIsActive(true);
  };

const hintLogic = (hints) =>{
 
  if (hint < hints){
    setNoHint(true);
     console.log('You are out of hints')
   

  }
  else{
    setHint((prev) => prev-hints);
    setNoHint(false);
  }
  
}


  return (
    <View style={styles.container}>
      {/* Use Hint */}
  



      <GameOver  isVisible={isModalVisible} onClose={modalOff}>
       <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-between', height:'100%', paddingTop:10}}>
       
       <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
        <View style={{width:'30%'}}></View>
        <Text style={{color:'#ff8ede',  fontFamily:'germany', fontSize:24}}> Use Hints</Text>
      <TouchableOpacity onPress={modalOff}>
       <Ionicons name="close-circle-outline" color="#5ff5da" size={42} style={{margin:'auto'}}/>
       </TouchableOpacity>
       </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
<TouchableOpacity 
         onPress={() => {
          hintLogic(4);
          // Check the condition based on which modalOn or modalOff is called
          if (hint < 4) {
            modalOn();
          } else {
            fiftyFifty(quizdata[currentQuestion].options)
            modalOff();
            setIsActive(false)
            
          }
        }}
style={{marginRight:'10%',  flexDirection:'column', 
alignItems:'center'}}>
       
       <View style={{position:'relative',}}>
        <Image
          source={badge}
          style={{width:100,height:100 ,}}
        /> 
        </View>
        <View style={{position:'absolute', flexDirection:'column', justifyContent:'space-between', height:'100%', paddingVertical:10}}>
          <Text style={{fontFamily:'score', fontSize:20, color:'#5ff5da'}}>50 / 50</Text>
          <View style={{flexDirection:'row',}}>
      <Image
            source={shoes}
            style={{width:40,height:40,  transform: [{ rotate: '35deg'}] }}
            
          />
          <Text style={{fontFamily:'score', fontSize:18, color:'#fff', marginLeft:-10}}>X4</Text>

      </View>
      </View>
        </TouchableOpacity>

        <TouchableOpacity
        
       onPress={() => {
        hintLogic(8);
        // Check the condition based on which modalOn or modalOff is called
        if (hint < 8) {
          modalOn();
        } else {
          modalOff();
        handleAnswer(quizdata[currentQuestion].answer)
          
          
        }
      }}
         style={{marginLeft:'10%',  alignItems:'center', 
         flexDirection:'column',}} >
        <View style={{position:'relative'}}>
         <Image
        source={badge}
        style={{width:100,height:100 }}
      /> 
      </View>
      <View style={{position:'absolute', flexDirection:'column', justifyContent:'space-between', height:'100%', paddingVertical:10}}>
          <Text style={{fontFamily:'score', fontSize:20, color:'#5ff5da'}}>Answer</Text>
          <View style={{flexDirection:'row',}}>
      <Image
            source={shoes}
            style={{width:40,height:40,  transform: [{ rotate: '35deg'}] }}
            
          />
          <Text style={{fontFamily:'score', fontSize:18, color:'#fff', marginLeft:-10}}>X8</Text>

      </View>
      </View>
      </TouchableOpacity>
        
      
           </View>
           {nohint ?
           <> 
           <View style={{flexDirection:'row', alignItems:'center'}}>
           <Text 
        style={{fontFamily:'Champions-regular',
        fontSize:15, marginRight:5,
        color:'#ff6375'}}>You are out of hints</Text>
        <Ionicons name='sad-outline' color='#ff6375' size={22}/>
        </View>
        <TouchableOpacity
        onPress={()=>{showRewardedAd(3); setIsActive(false)}}

        disabled={loading}
         style={{borderColor:'rgba(247, 15, 255, 0.7)', borderWidth:2, borderRadius:8}}>
       
        <View style={{flexDirection:'row',paddingHorizontal:15,paddingVertical:5, alignItems:'center',}}>
        {loading ? <View style={{paddingHorizontal:5}}>
<ActivityIndicator size="small" color="#5ff5da" /> 
</View> : <Image
          source={hintvid}
          style={{width:30,height:30 }}
        /> }
      <Text style={{fontFamily:'Champions-regular',paddingLeft:5, fontSize:15, color:'#5ff5da'}}>More Hints</Text>
          </View>
          </TouchableOpacity>
           </>: null}
           <View style={{flexDirection:'row', }}>
          <View style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
          <Image
          source={share}
          style={{width:30,height:30 }}
        /> 
        <Text style={{fontFamily:'Champions-regular',paddingLeft:5, fontSize:15, color:'#5ff5da'}}>Share Game</Text>
          </View>

<Ionicons  name="remove" size={56} color='#5ff5da' style={{transform: [{ rotate: '90deg'}]}}/>

          <TouchableOpacity 
          onPress={()=>{showRewardedAd(3); setIsActive(false)}}
          disabled={loading}
          style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
       
       {loading ? <View style={{paddingHorizontal:5}}>
<ActivityIndicator size="small" color="#5ff5da" /> 
</View> : <Image
          source={hintvid}
          style={{width:30,height:30 }}
        /> }
         
        <Text style={{fontFamily:'Champions-regular',paddingLeft:5, fontSize:15, color:'#5ff5da'}}>More Hints</Text>
            </TouchableOpacity>
       
        </View>
      </View>

        </GameOver>
      
      {/* Game Over */}

      <UseHints  isVisible={overVisible} onClose={overModalOff}>
       <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-between', height:'100%', paddingTop:10}}>
       
       <View style={{flexDirection:'row', justifyContent:'center' }}>
      <View>
       <Image
            source={foul}
            style={{width:25,height:25, marginRight:5}}
            
          />
          </View>
          <View>
        <Text style={{color:'#ff6375',  fontFamily:'germany', fontSize:22}}>Game Over!</Text>
        </View>
       </View>
       <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
 <Image
            source={champ}
            style={{width:40,height:40}}
            
          />
          <Text style={{fontFamily:'score', textAlign:'center',color:'#5ff5da', fontSize:40}}>{highScore}</Text>
          </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

        <View style={{justifyContent:'center', alignItems:'center',marginRight:'10%', }}>
<Text style={{fontFamily:'Champions-regular', fontSize:16, color:'#5ff5da'}}>Continue</Text>
<TouchableOpacity
       onPress={() => {
        hintLogic(10);
        // Check the condition based on which modalOn or modalOff is called
        if (hint < 10) {
          overModalOn();
        } else {
        
          overModalOff();
          
        }
      }}
         style={{ alignItems:'center', 
         flexDirection:'column',}} >

        <View style={{position:'relative'}}>

         <Image
        source={badge}
        style={{width:50,height:50 }}
      /> 
      </View>
         
      <View style={{position:'absolute',  justifyContent:'center',alignItems:'center' }}>
      <Image
            source={shoes}
            style={{width:25,height:25, transform: [{ rotate: '35deg'}] }}
            
          />
          <Text style={{fontFamily:'score', fontSize:18, color:'#fff',}}>X10</Text>


     
      </View>
      </TouchableOpacity>
</View>

<View style={{justifyContent:'center', alignItems:'center',marginLeft:'10%', }}>
<Text style={{fontFamily:'Champions-regular', fontSize:16, color:'#5ff5da'}}>Continue</Text>
<TouchableOpacity
disabled={loading}
       onPress={() => {
        setIsActive(false);
        showRewardedAd(2)
      
      }}
         style={{ alignItems:'center', 
         flexDirection:'column',}} >

        <View style={{position:'relative'}}>

         <Image
        source={badge}
        style={{width:50,height:50 }}
      /> 
      </View>
     
        
        <View style={{position:'absolute', marginTop:10, justifyContent:'center',alignItems:'center', }}>
        {   loading? <ActivityIndicator size="small" color="#5ff5da"/> :
      <Image
            source={hintvid}
            style={{width:25,height:25}}
            
          />

      }
      </View>
     
      
      </TouchableOpacity>
</View>
       

           </View>
           <TouchableOpacity
           onPress={() =>{ 
            if (currentQuestion === quizdata.length - 1) {
              setCurrentQuestion(0);
            }
            else{
              setCurrentQuestion(currentQuestion + 1);

            }
            setScore(0);
            handleReset();
          overModalOff();
        }}
           style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
      <Image
            source={playagain}
            style={{width:50,height:50 }}
            
          />
<Text style={{color:'white', fontFamily:'score', fontSize:32}}>PLAY AGAIN</Text>
      </TouchableOpacity>
           {nohint ?
           <> 
           <View style={{flexDirection:'row', alignItems:'center'}}>
           <Text 
        style={{fontFamily:'Champions-regular',
        fontSize:15, marginRight:5,
        color:'#ff6375'}}>You are out of hints</Text>
        <Ionicons name='sad-outline' color='#ff6375' size={22}/>
        </View>
        <TouchableOpacity
        onPress={showRewardedAd}
        disabled={loading}
         style={{borderColor:'rgba(247, 15, 255, 0.7)', borderWidth:2, borderRadius:8}}>
       
        <View style={{flexDirection:'row',paddingHorizontal:15,paddingVertical:5, alignItems:'center',}}>
        {loading ? <View style={{paddingHorizontal:5}}>
<ActivityIndicator size="small" color="#5ff5da" /> 
</View> : <Image
          source={hintvid}
          style={{width:30,height:30 }}
        /> }
      <Text style={{fontFamily:'Champions-regular',paddingLeft:5, fontSize:15, color:'#5ff5da'}}>More Hints</Text>
          </View>
          </TouchableOpacity>
           </>: null}
           <View style={{flexDirection:'row', }}>
          <View style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
          <Image
          source={share}
          style={{width:30,height:30 }}
        /> 
        <Text style={{fontFamily:'Champions-regular',paddingLeft:5, fontSize:15, color:'#5ff5da'}}>Share Game</Text>
          </View>

<Ionicons  name="remove" size={56} color='#5ff5da' style={{transform: [{ rotate: '90deg'}]}}/>

          <TouchableOpacity 
          onPress={showRewardedAd}
          disabled={loading}
          style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
       
       {loading ? <View style={{paddingHorizontal:5}}>
<ActivityIndicator size="small" color="#5ff5da" /> 
</View> : <Image
          source={hintvid}
          style={{width:30,height:30 }}
        /> }
         
        <Text style={{fontFamily:'Champions-regular',paddingLeft:5, fontSize:15, color:'#5ff5da'}}>More Hints</Text>
            </TouchableOpacity>
       
        </View>
      </View>

        </UseHints>


        
      <ImageBackground source={stadium} style={styles.stripes}>
      <View style={styles.overlay}>
      {!dataLoaded ? <View style={{width:vw}}>
  <ActivityIndicator size="large" color="#5ff5da" />
 
</View> :
      <View style={{flex:1, flexDirection:'column', justifyContent:'space-between',   paddingTop: Constants.statusBarHeight,
}}>
 
      <View style={{flexDirection:'row', paddingHorizontal:10, justifyContent:'space-between'}}>
      
      <View style={{flexDirection:'row',   justifyContent:'center', alignItems:'center'}}>
      <Image
            source={shoes}
            style={{width:30,height:30, transform: [{ rotate: '35deg'}] }}
            
          />
          <Text style={{fontFamily:'score', fontSize:28, color:'#5ff5da'}}>
            {hint}
          </Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
 <Image
            source={champ}
            style={{width:25,height:25}}
            
          />
          <Text style={{fontFamily:'score', textAlign:'center',color:'#5ff5da', fontSize:28}}>{score}</Text>
          </View>


        
          
</View>

      <View style={{flex:1, justifyContent:'center',  }} >
     
<Text style={{fontFamily:'score', fontSize:20, textAlign:'center', color:'#5ff5da'}}> Guess the player!</Text>
        <View
        style={styles.imageGrid}>
          
        <View
          style={[styles.imageRows, {paddingTop:15}]}
        >
          <Image
            source={quizdata[currentQuestion].questionImages[0]}
            style={styles.imageItem}
          />
           <Image
            source={arrow}
            style={{width:35,height:25, }}
            
          />
          {/* <FontAwesome5 name="angle-double-right" size={42} color="#ff6969" /> */}
          <Image
            source={quizdata[currentQuestion].questionImages[1]}
            style={styles.imageItem}
          />
        </View>
        
        <View 
        style={{
          flexDirection:'row',
         
          justifyContent:'space-between',
          width:'65%'

        }}>
          <View
           style={{
           
            width:42
          }}>
          </View>

          <View
           style={{
            width:'10%',          
            alignItems:'center',
            marginVertical:16
          }}>
             <Image
            source={arrow}
            style={{width:35,height:25,  transform: [{ rotate: '90deg'}]}}
            
          />
          
           </View>
        </View>
        <View
           style={[styles.imageRows, {paddingBottom:15}]}
        >
          <Image
            source={quizdata[currentQuestion].questionImages[3]}
            style={styles.imageItem}
          />
            <Image
            source={arrow}
            style={{width:35,height:25,  transform: [{ rotate: '180deg'}]}}
            
          />
          {/* <FontAwesome5 name="angle-double-left" size={42} color="#ff6969" /> */}

          <Image
            source={quizdata[currentQuestion].questionImages[2]}
            style={styles.imageItem}
          />
        </View>

        </View>
       

        
      
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={[styles.ideaBox, {borderBottomRightRadius:15,borderTopRightRadius:15 }]}>
        <TouchableOpacity style={styles.ideaItems} onPress={modalOn} >
        <Image
            source={shoes}
            style={{width:25,height:25, transform: [{ rotate: '35deg'}] }}
            
          />
           <Text style={{fontFamily:'Champions-bold', color:'#5ff5da'}}>
            Use Hints
           </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity 
       disabled={paused}
onPress={handlePauseResume}
style={{width:55, height:55, borderRadius:100, 
        borderWidth:3, borderColor:'#5ff5da',justifyContent:'center', alignItems:'center'}}>
       

<View>
        <Text style={{fontFamily:'Champions-bold',textAlign:'center', fontSize:25, color:'white'}}>{time}</Text>
      <View style={{flexDirection:'row', marginRight:10}}>
      <Image
            source={shoes}
            style={{width:20,height:20,  transform: [{ rotate: '35deg'}] }}
            
          />
          <Ionicons name="pause-circle-sharp" size={20} color="#5ff5da" style={{position:"absolute", paddingLeft:15,bottom:1}}/>
      </View>
      
        </View>
       </TouchableOpacity>

        <View style={[styles.ideaBox, {borderBottomLeftRadius:15,borderTopLeftRadius:15 }]}>
        <TouchableOpacity style={styles.ideaItems}
        onPress={()=>{setIsActive(false); showRewardedAd()}}
        disabled={loading}
        >
          {loading ? 

<View style={{paddingHorizontal:15}}>
<ActivityIndicator size="large" color="#5ff5da" /> 
</View>:
<>
          <View style={{flexDirection:'row'}}>
        <Image
            source={shoes}
            style={{width:25,height:25,  transform: [{ rotate: '35deg'}] }}
            
          />
          <Ionicons name = 'add-circle-sharp' size={20} color="#5ff5da" style={{position:'absolute', paddingLeft:15}}/>
          </View>
           
            
           
           <Text style={{fontFamily:'Champions-bold', color:'#5ff5da'}}>
            More Hints
           </Text>
           </>}
           
        </TouchableOpacity>
        </View>
      </View>


     {userClicked ? 
     <View>
     {eliminatedOptions.map((option, index) => (
          <TouchableHighlight
         
            key={index}
            title={option}
            underlayColor={option === quizdata[currentQuestion].answer? '#297e56' : '#ff6375'}
            onPress={() => {handleAnswer(option); setUserClicked(false)}}
           
             style={
            styles.questionContainer5050}
          >
         
            <Text style={styles.optionText}>{option}</Text>
          </TouchableHighlight>
        ))}
        </View>
      :
      <View>
      {quizdata[currentQuestion].options.map((option, index) => (
        <TouchableHighlight
       
          key={index}
          title={option}
          underlayColor={option === quizdata[currentQuestion].answer? '#297e56' : '#ff6375'}
          onPress={() => handleAnswer(option)}
         
           style={
          styles.questionContainer}
        >
       
          <Text style={styles.optionText}>{option}</Text>
        </TouchableHighlight>
      ))}
      </View>
      }
    
        
    
    
     
 {/* Conditionally render the 50/50 component */}
 
      
      </View>


<View >
     <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
</View>
      </View> 
}
</View>
      </ImageBackground>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    backgroundColor: '#080a36',
    alignItems: 'center',
    justifyContent: 'center',
  
 
  
  },
  questionContainer: {
    marginBottom:10,
    borderWidth: 2,
    borderColor:"#1e65b3",
    width:'75%',
   alignSelf:'center',
   paddingVertical:4,
   borderRadius:15,
  // Adjust the color and opacity as needed

   
  },
  questionContainer5050: {
    marginVertical:20,
    borderWidth: 2,
    borderColor:"#1e65b3",
    width:'75%',
   alignSelf:'center',
   paddingVertical:4,
   borderRadius:15,
  },
  //container for all logos and arrows
  imageGrid: {
    flexDirection: "column",
          justifyContent: "center",
          width: "90%",
          alignItems: "center",
          alignSelf:'center',
        
          
          
  },
  imageRows:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "82%",
    alignItems: "center",
  },
  imageItem: {
    width: "30%", // 2 images in a row, adjust the width as needed
    aspectRatio: 1, // To maintain a square aspect ratio
  },
   stripes: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent:'center',
  
  },
  overlay: {
    flex: 1,
 // Adjust the color and opacity as needed
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor:'rgba(15, 15, 15, 0.7)',
     

  },
  optionText: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    textAlign: "center",
    fontFamily: "Champions-bold",
    color: "#FFF",
  },

  ideaItems:{
    flexDirection:'column', 
    justifyContent:'space-between', 
    alignItems:'center',
    padding:10,
    
  },
  ideaBox:{
    marginVertical:10,
    alignItems:'center',
    backgroundColor:'rgba(19, 90, 189, 0.3)'

  },
});

export default TransferQuiz;
