import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {


  return(

  
     <View style={styles.container}>
   
    <Text> hello world</Text>

    </View> 
    
  

  )}

  const styles = StyleSheet.create({
    container: { 
      flex: 1 ,
      justifyContent: 'center',
      alignItems: 'center',
    
    },

    message:{

      borderRadius:25,
      borderWidth:.5,
      borderColor:'#EE0202',
      marginTop:20,
      width:'85%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },

    spinnerTextStyle: {
      color: '#FFF',
    },
  });
  


