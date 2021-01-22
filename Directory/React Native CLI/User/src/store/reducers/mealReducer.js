import {MEALS, CATEGORIES} from '../../data/dummy-data';
import { TOGGLE_FAVORITE,SET_MEALS } from '../actions/meals';
import {CATEGORY_ID, CLEAR, CATID_UPDATE} from '../actions/meals';
import {useEffect} from 'react';


const initialState={
  
    meals:MEALS,
    categoryId:CATEGORIES,
   // filteredMeals:MEALS,
    favoriteMeals:[],
    catId:[''],
   // bb:["c1","c2"]
    // name: " M. Sheharyar Khan",
    // email: "msheharyark786@gmail.com",
    // phone : '3249472294',
    
};

// useEffect(() => {
  // fetch('http://food.theflashdemo.com/api/all_meal')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     initialState.meals=json.Meals
  //     console.log("initialState.meals",initialState.meals)
  //     // setTitle(json.name)
  //     // setDescription(json.image);
  //   })
  //   .catch((error) => console.error(error))
    // .finally(() => setLoading(false));
// }, []);

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_MEALS:
      return {
        meals: action.meals,
        // userProducts: action.meals.filter(catId => catId.id === 'c1')
      };
      case TOGGLE_FAVORITE:
        const existingIndex = state.favoriteMeals.findIndex(
          meal => meal.id === action.mealId
        );
       
        if (existingIndex >= 0) {
          const updatedFavMeals = [...state.favoriteMeals];
          updatedFavMeals.splice(existingIndex, 1);
         
          return { ...state, favoriteMeals: updatedFavMeals };
        } else {
          const meal = state.meals.find(meal => meal.id === action.mealId);
          
          return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
        }
        case CATID_UPDATE:
        const new_category=action.new_Cat;
        state.catId="";
        if (state.catId=='' ){
          state.catId=new_category;
          //console.log("updated",state.catId);
        }
      case CATEGORY_ID:
          const existingCatId=action.categoryIds;
          //state.catId = action.categoryIds;
          //console.log("------------------------------------");
          
          if ((state.catId.includes(existingCatId))||state.catId=='' )
          {
            // existingCatId=existingCatId.split();
            // console.log("array",existingCatId)
            state.catId='';
            state.catId = existingCatId;
            // catId=existingCatId;
           // console.log("state.catId",state.catId);
            
          }

         
         
        //  // }
          
          // else if(existingCatId==1){
          //   state.catId = '';
          // }
        //  case CLEAR:
        //    const toChange=action.change
        //   if(toChange==1){
        //     state.catId = '';
        //     state.catId = existingCatId;

        //   }
          // case SET_NEW_ID:
          //   var new_category=action.new_Category_id;
          //   console.log("action.new_Category_id",action.new_Category_id)
          //   if((state.catId.includes(new_category))){
          //     return ;
          // }
          // else{
          //   state.catId = new_category;
          // }
          


          // case CHANGE_NAME:
            
          //   if(action.new_name!=state.name){
              
          //     //state.name="";
          //     state.name=action.new_name;
              
          //   }
          //   case CHANGE_EMAIL:
          //     if(action.new_email!=state.email){
          //       //console.log("state.email",state.email)
          //       //state.email="";
          //       state.email=action.new_email;
          //       //console.log("state.email",state.email)
          //     }
          //   case CHANGE_PHONE:
          //     if(action.new_phone!=state.phone){
          //       //state.phone="";
          //       state.phone=action.new_phone;
          //     }
            
            


          
      default:
        return state;
    }
  };

export default mealReducer;