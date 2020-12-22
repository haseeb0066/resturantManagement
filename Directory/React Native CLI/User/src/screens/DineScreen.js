import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function DineScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>
                Oops... Data Not Found;
            </Text>
        </View>
    )
}

DineScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Dine In',
      headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles=StyleSheet.create({
  screen:{
    flex:1,
    fontSize:20,
    paddingLeft:130,
    justifyContent:'center'
}
})

export default DineScreen
