import React,{useState,useEffect} from 'react';
import { CATEGORIES} from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import MealList from '../components/MealList';
import DesiMealList from '../components/DesiMealList';

//import SecondTopScreen from '../screens/SecondTopScreen'
//import { View } from 'react-native-animatable';

const CategoryMealScreen = props => {
    
  const catId = props.navigation.getParam('categoryId');

  const availableMeals=useSelector(state=>state.mealReducer.meals);
  const [mealData,setMealData]=useState({})

  useEffect(() => {
    fetch('http://food.theflashdemo.com/api/all_meal')
     .then((response) => response.json())
     .then((json) => setMealData(json))
     .catch((error) => console.error(error))

     // console.log(citiesList , "List of Cities")
  }, []);


  const displayedMeals=availableMeals.filter(
    meal => meal.resturant_id.indexOf(catId) >= 0
  );
  
 console.log("mealData",mealData.Meals)

//console.log(displayedMeals);
// console.log(displayedMeals.price)
//console.log(offerMeals)

    
      // return <MealList listData={displayedMeals} navigation={props.navigation} />
    
    // if(catId==='c2')
    // {
      return <DesiMealList listData={displayedMeals} navigation={props.navigation} />;
    // }


};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = 0;
  // CATEGORIES.find(cat => cat.id === catId);

  // return {
  //   headerTitle: navData.navigation.getParam('title')
  // };
};

export default CategoryMealScreen;
