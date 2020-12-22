import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Platform } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AddressScreen =(props)=> {

    const addNewAddress=()=>{
        
        alert('add your new Address')
    }


    const MyIcon2 = <Icon name="plus" size={20} color="#EE0202" solid  />;
    return (
        <View style={styles.screen}>
            
            <View style={styles.border}>
         
            <View style={styles.IconSyle}>
              <View style={styles.Icon}>
              <TouchableOpacity
              onPress={()=>{addNewAddress()}}
              >
              {MyIcon2} 
              </TouchableOpacity>
              </View>
            <Text style={{marginLeft:15, paddingTop:2 }}> Add new address </Text>
            </View>

            </View>            
        </View>
    )
}

AddressScreen.navigationOptions = navData => {
  return {
    headerTitle: 'MY ADDRESSES',
    headerLeft: ()=>null
    
  };
};

const styles=StyleSheet.create({

    screen:{
      flex:1,
      alignItems:'center',
      backgroundColor: '#e6e6e6'
    },

    border:{

        marginTop:20,
        height:45,
        width:'80%',

        backgroundColor:'#ffffff',
        borderRadius:20,
    },

    IconSyle:{
      
      flexDirection: 'row',
      padding:10,
      marginLeft:5,
    },

    Icon:{

      borderRadius:20,
      borderWidth:1,
      borderColor:"black",
      padding:2,
      paddingLeft:5,
      paddingRight:5,
    },
})

export default AddressScreen