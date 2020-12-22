import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import DesiMealList from '../components/DesiMealList';
import BbqMealList from '../components/BbqMealList';
import ChineseMealList from '../components/ChineseMealList';
import TandoorMealList from '../components/TandoorMealList';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.mealReducer.favoriteMeals);
  const idMeals = useSelector(state => state.mealReducer.favoriteMeals.type);

 
  // const availableMeals=useSelector(state=>state.mealReducer.meals);
  // // const mealId = props.navigation.getParam('mealId');
  // const selectedMeal = favMeals.find(meal => meal.type === 'Deal');
  // console.log(selectedMeal)
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  //console.log(idMeals);
  //return <MealList listData={favMeals} navigation={props.navigation} /> 
  var IdMeal=0;
  var IdDesi=0;
  var IdBbq=0;
  var IdChinese=0;
  var IdTandoor=0;
  const renderMealItem = itemData => {
    //console.log(itemData.item.id)
    if(itemData.item.type==='Deals'&&( IdMeal===0||IdMeal==itemData.item.id)){
      IdMeal=itemData.item.id;
      console.log("IdMeal", IdMeal)
    return <MealList listData={favMeals} navigation={props.navigation} /> 
    }
    //console.log(itemData.item.type)
    else if(itemData.item.type==='Pakistani'&&( IdDesi===0||IdDesi==itemData.item.id)){
      IdDesi=itemData.item.id;
      return <DesiMealList listData={favMeals} navigation={props.navigation} />  
    }
    else if(itemData.item.type==='Bbq'&&( IdBbq===0||IdBbq==itemData.item.id)){
      IdBbq==itemData.item.id;
      return <BbqMealList listData={favMeals} navigation={props.navigation} />  
    }
    else if(itemData.item.type==='Chinese'&&( IdChinese===0||IdChinese==itemData.item.id)){
      IdChinese==itemData.item.id;
      return <ChineseMealList listData={favMeals} navigation={props.navigation} />  
    }
    else if(itemData.item.type==='Tandoor'&&( IdTandoor===0||IdTandoor==itemData.item.id)){
      IdTandoor==itemData.item.id;
      return <TandoorMealList listData={favMeals} navigation={props.navigation} />  
    }
      
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={favMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        //style={{ width: '100%' }}
      />
    </View>
  );
 
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'FAVORITE MEALS',
    // headerLeft: () =>(
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
