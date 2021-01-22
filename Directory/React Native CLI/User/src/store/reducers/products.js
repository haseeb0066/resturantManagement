import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCTS
} from '../actions/products';
import { MEALS } from '../../data/dummy-data';
//import Product from '../../models/product';
import Meal from '../../models/meal';


const initialState = {
  availableProducts: [],
  userProducts: MEALS.filter(meal => meal.id === 'm1a')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        availableProducts: action.products,
        // userProducts: action.products.filter(catId => catId.id === 'u1')
      };
    case CREATE_PRODUCT:
      const newProduct = new Meal(
        new Date().toString(),
        'u1',
        action.productData.title,
        action.productData.imageUrl,
        action.productData.dealDetail,
        action.productData.price
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct)
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        meal => meal.id === action.pid
      );
      const updatedProduct = new Meal(
        action.pid,
        state.userProducts[productIndex].mealId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.dealDetail,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        meal => meal.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.pid
        )
      };
  }
  return state;
};
