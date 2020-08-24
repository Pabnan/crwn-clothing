import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
//===========================================my version below===============
// import React from 'react';
// import { connect } from 'react-redux';
// import { addItem, deleteItem, decreaseQty } from '../../redux/cart/cart.actions';
// import './checkout-item.styles.scss';

// const CheckoutItem = ({ cartItem, deleteItem,addItem, decreaseQty}) => {
//     const { name, imageUrl, price, quantity  }=cartItem;
//     return (
//   <div className='checkout-item'>
//     <div className='image-container'>
//       <img src={imageUrl} alt='item' />
//     </div>
//     <span className='name'>{name}</span>
//     <span className='quantity'>
//     <div className='arrow' onClick={() => decreaseQty(cartItem)}>
//           &#10094;
//         </div>
//         <span className='value'>{quantity}</span>
//         <div className='arrow' onClick={() => addItem(cartItem)}>
//           &#10095;
//         </div>
//     </span>
//     <span className='price'>{price}</span>
//     <div className='remove-button' onClick={()=>deleteItem(cartItem)}>&#10005;</div>
//   </div>
//     )
//     };

// const mapDispatchToProps = dispatch => ({
//     addItem: cartItem => dispatch(addItem(cartItem)),
//     deleteItem: cartItem => dispatch(deleteItem(cartItem)),
//     decreaseQty: cartItem => dispatch(decreaseQty(cartItem)),
//   });
  
//   export default connect(
//     null,
//     mapDispatchToProps
//   )(CheckoutItem);
  