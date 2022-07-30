// For add item to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For increment item from cart
export const increment = (product) => {
  return {
    type: "INCREMENT",
    payload: product,
  };
};
// For decrement item from cart
export const decrement = (product) => {
  return {
    type: "DECREMENT",
    payload: product,
  };
};

// For delete item from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
