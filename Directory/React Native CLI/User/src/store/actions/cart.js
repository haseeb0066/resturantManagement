export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ALL_CLEAR = 'ALL_CLEAR';

export const addToCart = product => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = mealId => {
  return { type: REMOVE_FROM_CART, pid: mealId };
};

export const allClear = clear => {
  return { type: ALL_CLEAR, pid: clear };
};


