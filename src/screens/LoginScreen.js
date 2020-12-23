import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  TextInput,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

//import Forms from '../components/Forms';
import Logos from '../components/Logos';
//import SignupScreen from './SignupScreen';
import My_Buttons from '../components/MyButtonAndroid';
import * as Animatable from 'react-native-animatable';
//import { showLoader, hideLoader } from '../components/AppLoader';


const LoginScreen = (props) => {
  const [email, setEmail] = useState('xyz@gmail.com');
  const [password, setPassword] = useState('12345');
  const [state, setState] = useState(true);



  const handleLogin=()=>{
    console.log("Handle Login")

    var checkEmail = "xyz@gmail.com"; 
    var checkPassword = "12345";
    
      if((email== checkEmail ) && (password== checkPassword))
        {
          //showLoader();
          console.log("If part")
          props.navigation.navigate({
            routeName:'Categories'
          })
          //hideLoader();
        }
      
      else{
          console.log("else part ,  This is Incorrect...")
          alert("Please write correct email or password")
      }

      //setEmail("");  
      //setPassword("");
      
    }



  return (
    <View style={styles.container}>
      <Text style={{ alignItems:'center', fontSize:20, fontWeight:'bold', color:'#EE0202' }}> Login Please! </Text>

    {/* <View style={styles.spinnerv}>
    {
      state?
      <ActivityIndicator size={100} /> :
      <Text> loading... </Text>
    }
    </View>


      <View style={styles.header}>
        <Logos />
      </View> */}

        <View style={styles.g_container}>
          <KeyboardAvoidingView>
          <TextInput
            style={styles.inputArea}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            autoFocus={true}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            keyboardType="email-address"
            value={email}
            onChangeText={(e) => setEmail(e)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            placeholder="Password"
            placeholderTextColor="#ffffff"
            keyboardType="name-phone-pad"
            required={true}
            minLength={6}
            errorMessage="Incorrect Password!!"
            value={password}
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            initialValue=""
          />
          
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button}
            onPress={() => {handleLogin()} }
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
        </View>

      
        <View style={styles.signupContianer}>
          <Text style={styles.signupText}> Don't have an account yet? </Text>
          

            <TouchableOpacity style={styles.signupButton}
             onPress={() => {
               
              // alert('Please enter')
              props.navigation.navigate({routeName: 'SignupScreen'});
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
                    
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },

spinner: {
      //flex: 1,
      position: 'absolute',
      left:0,
      right:0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',

    },

  signupContianer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signupText: {
    fontSize: 14,
    fontWeight: 'bold',
    // color:'rgba(255,255,255, 0.7)',
    color: 'black',
  },
  signupButton: {
    fontWeight: 'bold',
    backgroundColor: '#EE0202',
    fontSize: 20,
    width: 100,
    height: 30,
    borderRadius: 25,
  },
  header: {
    flex: 2,
    backgroundColor:'#EE0202',
    justifyContent: 'center',
    alignItems: 'center',
  },

 
  g_container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  inputArea: {
    marginVertical: 20,
    height: 40,
    width: 250,
    //backgroundColor: '#F2F1F3',
    //borderWidth:0.5,
    borderBottomColor:'#EE0202',
    borderBottomWidth:1,
    //borderRadius: 25,
    paddingHorizontal: 30,
  },

  button: {
    marginTop:50,
    width: 100,
    height: 30,
    backgroundColor: '#EE0202',
    borderRadius: 25,
    marginVertical: 20,
  },

  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default LoginScreen;