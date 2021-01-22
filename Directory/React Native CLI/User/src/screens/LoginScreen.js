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

import Forms from '../components/Forms';
import Logos from '../components/Logos';
import Spinner from 'react-native-loading-spinner-overlay';
import SignupScreen from './SignupScreen';
import My_Buttons from '../components/MyButtonAndroid';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
//import { showLoader, hideLoader } from '../components/AppLoader';


const LoginScreen = (props) => {
  const [email, setEmail] = useState('xyz@gmail.com');
  const [password, setPassword] = useState('12345');
  const [state, setState] = useState(true);
  const [loginResponse, setLoginResponse]=useState("");
  const [isLoading, setIsLoading] = useState(false);
  const resData=0;


// showLoader = () => { this.setState({ showLoader:true }); };
// hideLoader = () => { this.setState({ showLoader:false }); };
const register= async()=>{
  setIsLoading(true)
  await fetch('http://food.theflashdemo.com/api/login', {
  method: 'POST',
  mode:'no-cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: email,
    password: password,
    
  }),
  })
  
  .then((response) => response.json())
  .then((responseData) => {
  // setLoginResponse(responseData);
 
  console.log("POST Response", "Response Body -> " + JSON.stringify(responseData));
  //setLoginResponse(responseData.Msg);
 ;
  if(responseData.Msg==='Login Successful'){
    handleLogin();
 }
 else{
   console.log("else part ,  This is Incorrect...")
   Alert.alert(
     "Wrong!",
     "Please write correct email or password.");
     setIsLoading(false);
   // alert("Please write correct email or password")
 }
  
    
  // console.log("loginResponse",loginResponse);
  
})
// .then((response) => {
  
// })
.done();
// .catch((error)=>{
//   console.log(error);

// })

}

  //setState({ spinner: false });

  
  const handleLogin=async()=>{
    // console.log("hanji",resData.Msg)

    
 
    await props.navigation.navigate({
      routeName:'Categories'
    })
  
  setIsLoading(false);

      //setEmail("");  
      //setPassword("");
      
    }
 


  return (
    
    <View style={styles.container}>

    <View style={styles.spinnerv}>
    {
      state?
      <ActivityIndicator size={100} /> :
      <Text> loading... </Text>
    }
    </View>


      <View style={styles.header}>
        <Logos />
      </View>

      <View style={styles.footer}>
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
            // value={email}
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
            // value={password}
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            initialValue=""
          />
          
          </KeyboardAvoidingView>
          {isLoading ? (
          <Spinner
          //visibility of Overlay Loading Spinner
          visible={isLoading}
          // size="normal"
          // animation='fade'
          //Text with the Spinner
          // textContent={'Loading...'}
          //Text style of the Spinner Text
          // textStyle={styles.activityIndicator}
        />):(

        // )}
        //   {isLoading ? (
        //   <ActivityIndicator size="large" color={Colors.accentColor} style={styles.activityIndicator}/>
        //   ) : (
          <TouchableOpacity style={styles.button}
            onPress={register}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          )}
          
        </View>

      
        <View style={styles.signupContianer}>
          <Text style={styles.signupText}> Don't have an account yet? </Text>
          

            <TouchableOpacity style={styles.signupButton}
             onPress={() => {
               
              props.navigation.navigate({routeName: 'SignupScreen'});
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
                    
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE0202',
  },
  activityIndicator: {
    // backgroundColor:'#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf:"center",
    fontSize:25,
    width:"60%",
    color: Colors.accentColor,
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
     // paddingTop: 30,
      //backgroundColor: '#ecf0f1',
      //padding: 8,
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

  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //paddingVertical: 10,
    paddingHorizontal: 60,
  },
  g_container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    marginVertical: 10,
    height: 40,
    width: 250,
    backgroundColor: '#F2F1F3',

    borderRadius: 25,
    paddingHorizontal: 30,
  },
  button: {
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

// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:'#009387',
//   },
//   header:{
//     flex:1,
//     justifyContent:'flex-end',
//     paddingHorizontal:20,
//     paddingBottom:50
//   },
//   footer:{
//     flex:3,
//     backgroundColor:'#fff',
//     borderTopLeftRadius:30,
//     borderTopRightRadius:30,
//     paddingHorizontal:20,
//     paddingVertical:30
//   },
//   textHeader:{
//     color:'#fff',
//     fontWeight:'bold',
//     fontSize:30
//   },
//   textFooter:{
//      color:'#05375a',
//      fontSize:18
//   },
//   action:{
//     flexDirection:'row',
//     marginTop:10,
//     borderBottomWidth:1,
//     borderBottomColor:'#f2f2f2',
//     paddingBottom:5
//   },
//   textInput:{
//     flex:1,
//     // marginTop: platform.os -- 'ios' ? : -12,
//     paddingLeft:10,
//     color:'#05375a'
//   },
//   button:{
//     alignItems:'center',
//     marginTop:50,
//   },
//   signIn:{
//     width:'100%',
//     height:'50',
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius:10
//   },
//   textSign:{
//     fontSize:18,
//     fontWeight:'bold'
//   },

// });

export default LoginScreen;