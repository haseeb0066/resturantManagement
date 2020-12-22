import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function My_OrderScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                No Order Record
            </Text>
        </View>
    )
}

My_OrderScreen.navigationOptions = navData => {
    return {
      headerTitle: 'MY ORDERS',
      headerLeft: ()=>null
      // headerLeft: ()=>(
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
  screen:{
    flex:1,
    fontSize:20,
    justifyContent:'center',
    paddingLeft:120,
    fontFamily:'open-sans-bold'

}
})

export default My_OrderScreen


// Alert.alert(
//   "Alert Title",
//   "You have items from another restaurant. If you want to proceed with this reataurant, your previous cart will be deleted.",
//   [
//     {
//       text: "Cancel",
//       onPress: () => console.log("Cancel Pressed"),
//       style: "cancel"
//     },
//     { text: "OK", onPress: () => {
//       dispatch(cartActions.allClear(1))
//       dispatch(mealsActions.set_new_id(selectedMeal.categoryIds));
//       dispatch(cartActions.addToCart(selectedMeal));
      
    
//     } }
//   ],
//   { cancelable: false }
// );




// if(CatId==selectedMeal.categoryIds)
// {
//   //console.log("if",CatId);
//   return dispatch(cartActions.addToCart(selectedMeal));
 
  
//   //activeCat=selectedMeal.categoryIds;
//}