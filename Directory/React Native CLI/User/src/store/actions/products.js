import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Category from '../../models/category';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

const hel=(data,loadedProducts)=>{
  console.log("welcome to hell!");
  return(
    <FlatList
    data={data}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      for (const key in item) {
          console.log("Data",data);
          loadedProducts.push(
            new Category(
              key,
              'u1',
              item[key].id,
              item[key].title,
              item[key].imageUrl,
              // resData[key].price
            )
          );}
      // loadedProducts.push(
        // new Category(
        //   item.id,
        //   item.title,
        //   item.imageUrl,
        //   // resData[key].price
        // ))
    }}
    />
  )
}

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
      'http://food.theflashdemo.com/api/all_resturant'
    );

    const resData = await response.json();
    // resData=resData.Resturant;
    const data=resData.Resturant;
    
    // console.log(resData.id);
    // console.log(resData.name);
    const loadedProducts = []; 
    for (const key in data) {
      // console.log("Data",data);
      key,
      'u1',
      loadedProducts.push(
        new Category(
          data[key].id,
          data[key].name,
          data[key].image,
          // resData[key].price
        )
      );}
    
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
    console.log("Loading Product: ",loadedProducts)
    dispatch({ type: SET_PRODUCTS, products: loadedProducts });
  };
};

// export const deleteProduct = productId => {
//   return { type: DELETE_PRODUCT, pid: productId };
// };


export const deleteProduct = mealId => {
  return { type: DELETE_PRODUCT, pid: mealId };
};

export const createProduct = (title,  dealDetail, imageUrl, price) => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,
      dealDetail,
      imageUrl,
      price
    }
  };
};

export const updateProduct = (id, title,  dealDetail, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      dealDetail,
      imageUrl,
    }
  };
};
