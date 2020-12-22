import React from 'react';
import { CATEGORIES} from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import MealList from '../components/MealList';
import DesiMealList from '../components/DesiMealList';

//import SecondTopScreen from '../screens/SecondTopScreen'
//import { View } from 'react-native-animatable';

const CategoryMealScreen = props => {
    
  const catId = props.navigation.getParam('categoryId');
const availableMeals=useSelector(state=>state.mealReducer.meals);
  const displayedMeals =availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  
 

//console.log(displayedMeals);
// console.log(displayedMeals.price)
//console.log(offerMeals)

    
      return <MealList listData={displayedMeals} navigation={props.navigation} />
    
    // if(catId==='c2')
    // {
    //   return <DesiMealList listData={displayedMeals} navigation={props.navigation} />;
    // }


};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  // return {
  //   headerTitle: navData.navigation.getParam('title')
  // };
};

export default CategoryMealScreen;
