import Meal from '../../models/meal';
export const TOGGLE_FAVORITE= 'TOGGLE_FAVORITE';
export const CATEGORY_ID= 'CATEGORY_ID';
export const CLEAR= 'CLEAR';
export const CATID_UPDATE= 'CATID_UPDATE';
export const SET_MEALS= 'SET_MEALS';
// export const CHANGE_NAME= 'CHANGE_NAME';
// export const CHANGE_PHONE= 'CHANGE_PHONE';
// export const CHANGE_EMAIL= 'CHANGE_EMAIL';
export const fetchProducts = () => {
    // const [data, setData]=useState({});
    return async dispatch => {
      // any async code you want!
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //   // setLoginResponse(responseData);
     
    //   console.log("POST Response", "Response Body -> " + JSON.stringify(responseData));
    //   //setLoginResponse(responseData.Msg);
    //  ;
    //   if(responseData.Msg==='Login Successful'){
      
      const response = await fetch(
        'http://food.theflashdemo.com/api/all_meal'
      );
  
      const resData = await response.json();
      // resData=resData.Resturant;
      const data=resData.Meals;
      
      // console.log(resData.id);
      // console.log(resData.name);
      const loadedMeals = []; 
      // for (const key in data) {
      //   // console.log("Data",data);
      //   key,
      //   'u1',
      //   loadedMeals.push(
      //     new Meal(
      //       data[key].id,
      //       data[key].resturant_id,
      //       data[key].type,
      //       data[key].name,
      //       data[key].persons,
      //       data[key].image,
      //       data[key].price,
      //       data[key].deal_detail,
           
            

      //       // resData[key].price
      //     )
      //   );}
      
      // <FlatList
      //       data={data}
      //       // keyExtractor={({ id }, index) => id}
      //       renderItem={({ item }) => {
      //         console.log("Data",data);
      //         for (const key in item) {
                
      //           loadedProducts.push(
      //             new  Category(
      //               key,
      //               'u1',
      //               item[key].id,
      //               item[key].name,
      //               item[key].image,
      //               // resData[key].price
      //             )
      //           );
          
      //         }
      //       // <Text style={styles.moviesText}>{item.id}. {item.name}, {item.image}</Text>
      //       }}
      //     />
      console.log("Loading Meal: ",loadedMeals)
      dispatch({ type: SET_MEALS, meals: loadedMeals });
    };
  };
  


export const toggleFavorite=(id)=>{
    return {type: TOGGLE_FAVORITE, mealId:id};  
}
export const category_id=(id)=>{
    return {type: CATEGORY_ID, categoryIds:id};
    //console.log(categoryIds)  
}
export const clear=(id)=>{
    return {type: CLEAR, change:id};
    //console.log(change)  
}

export const set_new_id=(cal)=>{
    return {type: SET_NEW_ID, new_Category_id:cal};
    //console.log(change)  
}
export const set_new_catid=(val)=>{
    return {type: CATID_UPDATE, new_Cat:val};
    //console.log(change)  
}
// export const change_name=(names)=>{
//     return {type: CHANGE_NAME, new_name:names};
//     //console.log(change)  
// }
// export const change_email=(emails)=>{
//     return {type: CHANGE_EMAIL, new_email:emails};
//     //console.log(change)  
// }
// export const change_phone=(phones)=>{
//     return {type: CHANGE_PHONE, new_phone:phones};
//     //console.log(change)  
// }