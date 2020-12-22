export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

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
