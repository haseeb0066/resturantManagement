import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
 
import HeaderButton from '../components/HeaderButton';

function ReservationScreen(props) {

  //const mealId = props.navigation.getParam('mealId');
  const totalAmount = props.navigation.getParam('totalAmount');
  //console.log("Done!  ",mealId);


  if(totalAmount!=null){
    return (
      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
          <Image source={{ uri:  mealId.imageUrl }} style={styles.image} /> */}
        <View style={styles.optionsContainer}>
          <Text style={{paddingTop:5, color:"#424242", fontWeight:'bold', fontSize:14 }}>Total Amount (Inc tax)  =</Text>
          <Text style={{paddingTop:5, fontWeight:'bold', paddingLeft:20, fontSize:14, color:"#757575",}}>Rs.{totalAmount}/-</Text>
        </View> 
        {/* </View>  */}
      </View>
    )
  }
  else return null;
    
}

ReservationScreen.navigationOptions = navData => {
    return {
      headerTitle: 'RESERVATION',
      // headerLeft:()=> (
      //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //     <Item
      //       title="Menu"
      //       iconName="ios-menu"
      //       onPress={() => {
      //         navData.navigation.toggleDrawer();
      //       }}
      //     />
      //   </HeaderButtons>
      // )
    };
  };

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    backgroundColor:'#EEEEEE',
},

imageContainer:{
  marginTop:30,
  alignItems:'center',
  backgroundColor:'#EEEEEE',
  borderColor:"#EE0202",
  borderWidth: 1.5,
  borderRadius: 10,
  marginVertical: 2,
  marginLeft:10,
  marginRight:10,
},

image: {
  marginTop: 2,
  width: '95%',
  height: 200,
  
},
optionsContainer:{

        alignContent:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop:20,
        width: '90%', 
        borderRadius: 15,
        borderWidth:1,
        borderColor: "#EE0202",
        marginLeft:15,
        padding:2,      
    },

})

export default ReservationScreen