import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
  } from 'react-native';
import Colors from '../constants/Colors';



function Logos() {
    return (
        <View style={styles.container}>
             <Image
        style={ {width: 130, height: 130,} }
        source={require('../images/logo2.jpg')}
      />
        <Text style={styles.logotext}>
            Welcome to my app!
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
      
      flexGrow:1,
      justifyContent: 'center',
      alignItems:'center',
       backgroundColor:Colors.accentColor,
      paddingTop:10,
    },
    logotext:{
        marginVertical:15,
        fontSize:24,
        color:'rgba(255,255,255, 0.7)',
    }
  });

export default Logos
