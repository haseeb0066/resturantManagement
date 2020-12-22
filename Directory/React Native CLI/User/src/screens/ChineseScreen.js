import React from 'react';
// import { CATEGORIES,Chinese_MEALS } from '../data/Chinese_Data';
import { CATEGORIES} from '../data/dummy-data';
import ChineseMealList from '../components/ChineseMealList';
import { useSelector, useDispatch } from 'react-redux';

const ChineseScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const availableMeals=useSelector(state=>state.mealReducer.meals);
  const displayedMeals =availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <ChineseMealList listData={displayedMeals} navigation={props.navigation} />
}

ChineseScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log("Chinese")
  // console.log(selectedCategory);
  // return {
  //   headerTitle: selectedCategory.title
  // };
};



export default ChineseScreen
