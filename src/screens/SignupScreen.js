import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import Logos from '../components/Logos';
import LoginScreen from './LoginScreen';
import {useState} from 'react';

const SignupScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleSignupButton = () => {

    console.log("handleSignupButton")

    if (!userName) {
      alert('Please enter userName');
      return;
    }
    if (!password) {
      alert('Please enter Password');
      return;
    }
    if (!email) {
      alert('Please enter Email');
      return;
    }
    if (!phoneNumber) {
      alert('Please enter phoneNumber');
      return;
    }

    console.log(email , password, userName, phoneNumber)

    if((email !=null) && (password !=null) && (phoneNumber!=null) && (userName !=null))
    {
      props.navigation.navigate({
        routeName:'Categories' 
        })
    }
    else{
      alert("try again , You dont follow the rules")
    }

    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setUsername("");

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logos />
      </View>

      <View style={styles.footer} >

        <KeyboardAvoidingView
           behavior="padding"
           keyboardVerticalOffset={50}
        >
        <ScrollView>
          {/* <FormSignup type="SignUp"/> */}

          <TextInput
            style={styles.inputArea}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="black"
            value={userName}
            required={true}
            onChangeText={(value) => setUsername(value)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            required={true}
            placeholderTextColor="black"
            minLength={6}
            errorMessage="Please enter Minimum 6 characters password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Email"
            required={true}
            autoCapitalize="none"
            placeholderTextColor="black"
            keyboardType="email-address"
            errorMessage="Please enter a valid email address."
            value={email}
            onChangeText={(value) => setEmail(value)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Phone number"
            required={true}
            autoCapitalize="none"
            placeholderTextColor="black"
            keyboardType="numeric"
            minLength={11}
            errorMessage="Please enter a valid Phone number"
            value={phoneNumber}
            onChangeText={(value) => setPhoneNumber(value)}
            initialValue=""
          />

          <TouchableOpacity
          style={styles.signupButton}
          activeOpacity={0.7}
           onPress={() => { handleSignupButton ()} }>

          <Text style={styles.signupButtonText}> Sign Up</Text>
        </TouchableOpacity>


          <View style={styles.signupContianer}>
          <Text style={styles.signupText}> Already have an account!</Text>


          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {
            props.navigation.navigate({routeName: 'LoginScreen'});
            }}>
            <Text style={styles.buttonText}> Sign In</Text>
          </TouchableOpacity>

          </View>
        </ScrollView>
        </KeyboardAvoidingView>
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

  inputArea:{
    marginVertical:10,
    height: 40, 
    width:230,
     backgroundColor: '#F2F1F3',
    borderRadius:25,
    paddingHorizontal:30,
},

signupButtonText:{
  fontSize:20, 
  color:'#ffffff',
  fontWeight:'bold',
  textAlign:'center',
},

  signupText: {
    fontSize:12, 
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:10
    },

  signupButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:60,
    marginVertical:10,
    width:100,
    height:30,
    backgroundColor: '#EE0202',
    borderRadius:25,
  },

  header: {
    flex: 2,
  },

  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 60,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10,
    //marginVertical:20,
    width:90,
    height:30,
    backgroundColor: '#EE0202',
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
export default SignupScreen;