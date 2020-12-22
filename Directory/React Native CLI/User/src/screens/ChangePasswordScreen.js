import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Animated
} from 'react-native';
import {useState} from 'react';
import PassMeter from "react-native-passmeter";
import { useEffect } from 'react';
import { LogBox } from 'react-native';



function ChangePasswordScreen(props) {

  const MAX_LEN = 12,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

  // Animated.timing(this.state.animatedValue, {
  //   toValue: 1,
  //   duration: 500,
  //   useNativeDriver: true, // <-- Add this
  //   }).start();

    useEffect(() => {
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
      }, [])

    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
   

    const SaveNewPassword=()=>{

        if(password!=null )
        {
            if(newpassword!=null ){

                if(password===newpassword)
            {        
                    props.navigation.navigate({routeName: 'LoginScreen'});     
            }
            else{
                alert('Please enter same password both times')
            }
            }
            else{

                alert('Please fill re enter new password')
            }
        }
        else{
                alert('Please fill  re enter password !')
        }
    }


    return (
        <View style={styles.container}>

            <View style={styles.screen}>
            <Text style={styles.heading}>
            Re New Password
            </Text>
            </View>

            <KeyboardAvoidingView
           behavior="padding"
           keyboardVerticalOffset={50}
            >

            <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            //required={true}
            placeholderTextColor="black"
            maxLength={12}
            
            //errorMessage="Please enter Minimum 6 characters password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            initialValue=""
            />
            <View style={styles.meterStyle}>
            <PassMeter
            showLabels
            password={password}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
            
            />
            </View>

            <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            autoCapitalize="none"
            required={true}
            maxLength={12}
            placeholderTextColor="black"
            //errorMessage="Please enter Minimum 6 characters password"
            value={newpassword}
            onChangeText={(value) => setnewPassword(value)}
            initialValue=""
            />

            <View style={styles.meterStyle}>
            <PassMeter
            showLabels
            password={newpassword}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
            
            />
            </View>

            </KeyboardAvoidingView>

            <View style={styles.signupContianer}>
            <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={()=>{SaveNewPassword()}}>
            <Text style={styles.buttonText}>  SAVE  </Text>
          </TouchableOpacity>
          </View>

        </View>
    )
}
ChangePasswordScreen.navigationOptions = navData => {
  return {
    headerTitle: 'CHANGE PASSWORD',
    headerLeft: ()=>null
  };
};
const styles = StyleSheet.create({
    container: {    
      padding: 20,
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      //         fontSizebackgroundColor:'#FF5722'
    },

    meterStyle:{
      padding:20,
    },

    screen:{

      alignItems:'center',
  },
  
  heading:{
    marginBottom:50,
    //fontWeight:'bold',
    fontFamily:'open-sans-bold',
    fontSize:30,
  },

    input: {
        margin: 5,
        padding: 6,
        borderRadius: 8,
        marginBottom: 8,
        marginRight: 20,
        marginLeft: 20,
        paddingHorizontal: 10,
        //backgroundColor: "#eceff1",
        borderColor:"#EE0202",
        borderWidth: 1,
        
      },
  
    header: {
      flex: 2,
    },
  
    
  
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:10,
      //marginVertical:20,
      width:90,
      height:30,
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

export default ChangePasswordScreen