import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
//import { CATEGORIES,Tandoor_MEALS } from '../data/Tandoor_Data';
import TandoorMealList from '../components/TandoorMealList';

import { useSelector, useDispatch } from 'react-redux';
const TandoorScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const availableMeals=useSelector(state=>state.mealReducer.meals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <TandoorMealList listData={displayedMeals} navigation={props.navigation} />
}

// TandoorScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log("Tandoor")
  // console.log(selectedCategory);
  // return {
  //   headerTitle: selectedCategory.title
  // };
// };



export default TandoorScreen
