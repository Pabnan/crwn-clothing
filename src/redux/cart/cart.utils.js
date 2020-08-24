export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
//=================my version below======================
// export const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(
//       cartItem => cartItem.id === cartItemToAdd.id
//     );
  
//     if (existingCartItem) {
//       return cartItems.map(cartItem =>
//         cartItem.id === cartItemToAdd.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//     }
//     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
//   };

//   export const decreaseItemQty = (cartItems, cartItemToDec) => {
    
//     if (cartItemToDec.quantity>1) {
//       return cartItems.map(cartItem =>
//         cartItem.id === cartItemToDec.id
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       );
//     }
//     return cartItems.filter(
//          cartItem => cartItem.id !== cartItemToDec.id
//       );
//   };

//   export const deleteItemToCart = (cartItems, cartItemToDelete) => {
//     return cartItems.filter(
//       cartItem => cartItem.id !== cartItemToDelete.id
//     )
//   };

  
 



  