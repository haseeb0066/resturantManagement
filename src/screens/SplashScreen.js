import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    Dimensions,
    Image,
    Platform
  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import My_Buttons from '../components/MyButtonAndroid';


const SplashScreen= props => {
  
    return (

     
      //Main veiw
        <View style={styles.container}> 
        {/* { showLoader()} */}
    {/* header View  */}
            <View style={styles.header}>  
            <Animatable.Image
            animation="bounceIn"
            duraton="2000"
            style={ {width: 410, height: 410,} }
            source={require('../images/food1.jpg')}
            // style={ styles.logo} 
            resizeMode='stretch'
            />
            </View>
          {/* {hideLoader()} */}
    {/* Footer veiw */}
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}>
                <Text style={styles.title}> stay connected! </Text>
                <Text style={styles.text}> sgin in with account! </Text>

                {/* <View style={styles.button}> */}
                    

                    <View style={styles.signupContianer}>
                    <TouchableOpacity
                     style={styles.button}
                     activeOpacity={0.5}
                     onPress={()=>{ props.navigation.navigate({routeName: 'LoginScreen'} )}}>
                     <Text style={styles.buttonText}>  SAVE  </Text>
                     </TouchableOpacity>
                     </View>
            

                {/* </View> */}
            </Animatable.View>

        </View>)}

        

const {height}= Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#EE0202',
    },
    
    header:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
    },

    footer:{
      flex:1,
      backgroundColor:'#EEEEEE',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical:50,
      paddingHorizontal:75,
    },

    logo:{
        width: height_logo,
        height:height_logo,
    },

    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight: 'bold',
    },

    text:{
        color:'grey',
        marginTop:5,
        marginLeft:5
    },

    button:{
        alignItems:'flex-end',
        marginTop: 30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
    },

    textSign:{
        color:'#FF5722',
        fontWeight:'bold',
        fontSize:20,

    },
    signupButton:{
        fontWeight:'700',
         color:'#ffffff',
        fontSize:20,
      },

      button: {
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:10,
        //marginVertical:20,
        width:'80%',
        height:35,
        backgroundColor: "#EE0202",
        borderRadius:25,
      },
    
      buttonText: {    
        color:'#ffffff',
        fontWeight:'bold',
        fontSize: 20
      },
    
      signupContianer:{
        flexDirection:'row',
        marginVertical:35,
      }

  });

export default SplashScreen


