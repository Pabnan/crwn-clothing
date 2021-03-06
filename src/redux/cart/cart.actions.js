import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
//=================my version below=================
// import CartActionTypes from './cart.types';

// export const toggleCartHidden = () => ({
//   type: CartActionTypes.TOGGLE_CART_HIDDEN
// });

// export const addItem = item => ({
//   type: CartActionTypes.ADD_ITEM,
//   payload: item
// });

// export const deleteItem = item => ({
//   type: CartActionTypes.DELETE_ITEM,
//   payload: item
// });

// export const decreaseQty = item => ({
//   type: CartActionTypes.DECREASE_QTY,
//   payload: item
// });