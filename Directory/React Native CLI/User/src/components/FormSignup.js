import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

function FormSignup(props) {

    // const [state, setstate] = useState(initialState)

    return (
        <View style={styles.container}>

        <TextInput
          style={styles.inputArea}
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholder='Username'
        placeholderTextColor='#ffffff'
        autoCapitalize="none"
        secureTextEntry={true}
        ref={(input)=>props.password=input}
        />

       <TextInput
      style={styles.inputArea}
      underlineColorAndroid='rgba(0, 0, 0, 0)'
      placeholder='Email'
      placeholderTextColor='#ffffff'
      autoCapitalize="none"
      keyboardType='email-address'
      onSubmitEditing={()=>props.password}
        />

        <TextInput
          style={styles.inputArea}
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholder='Password'
        placeholderTextColor='#ffffff'
        autoCapitalize="none"
        secureTextEntry={true}
        ref={(input)=>props.password=input}
        />

        <TextInput
        style={styles.inputArea}
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholder='Re Enter Password'
        placeholderTextColor='#ffffff'
        autoCapitalize="none"
        secureTextEntry={true}
        ref={(input)=>props.password=input}
        />

        <TextInput
        style={styles.inputArea}
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholder='Phone Number'
        placeholderTextColor='#ffffff'
        autoCapitalize="none"
        secureTextEntry={true}
        ref={(input)=>props.password=input}
        />

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.type}</Text>
        </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({

  container:{
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    inputArea:{
        marginVertical:10,
        height: 40, 
        width:200,
        backgroundColor: 'rgba(255,255,255,0.3)', 
        borderRadius:25,
        paddingHorizontal:30,

    },
    button:{
        width:100,
        height:30,
        backgroundColor: '#FF5722',
        borderRadius:25,
        marginVertical:20, 
    },

    buttonText:{
        fontSize:20, 
        color:'#ffffff',
        fontWeight:'bold',
        textAlign:'center',

    },
  });

export default FormSignup
