import React, { useEffect, useState } from "react";
  import { Modal, View, Text, Pressable, StyleSheet ,Image ,ImageBackground} from 'react-native';


const modalBackdrop =  require("./assets/fallback.jpg");

const GameOver =({ isVisible, children, onClose }) =>{


    return (
      

      <View >
        <Modal animationType="slide"  transparent={true} visible={isVisible} >
     

     <View style={styles.modalContainer}>
      <View style={styles.modalContents}>
        <ImageBackground source={modalBackdrop} style={styles.modalContent}  >
<View style={styles.overlay}>


      
       
        
          <View style={{justifyContent:'center',  alignItems:'center',}}>
        {children}
            
          </View>
            
       
          
          </View>
      </ImageBackground>
      </View>
      </View>
      </Modal> 
    </View>
    )
}

const styles = StyleSheet.create({
  modalContent: {
 borderColor:'#5ff5da',
 borderWidth:3,
    borderRadius:25,
       
          overflow:'hidden',
           resizeMode:'cover',
         height:'100%',
         width:'100%',
           flex: 1,
           justifyContent: 'center',
          
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalContainer: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // semi-transparent background
  },
  modalContents: {
    
    width:'100%',
    height:'50%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    
   justifyContent:'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  
  overlay: {
    flex: 1,
 // Adjust the color and opacity as needed
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor:'rgba(15, 15, 15, 0.7)',
    
  },

});
export default GameOver