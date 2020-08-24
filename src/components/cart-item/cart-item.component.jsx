import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
//======================my version below==========
// import React from 'react';
// import { connect } from 'react-redux';
// import { deleteItem } from '../../redux/cart/cart.actions';
// import CustomButton from '../custom-button/custom-button.component';

// import './cart-item.styles.scss';

// //const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (

// const CartItem = ({toggleCartHidden, item, deleteItem}) => 
//   (
//   <div className='cart-item'>
    
//     <img src={item.imageUrl} alt='item' />
//     <div className='item-details'>
//       <span className='name'>{item.name}</span>
//       <span className='price'>
//         {item.quantity} x ${item.price}
        
      
//       </span>
//     </div>
//     <CustomButton
//       onClick={() => deleteItem(item)}
//     >
//       delete
//     </CustomButton>
//   </div>
//   );


// // const mapDispatchToProps = dispatch => ({
// //   addItem: item => dispatch(deleteItem(item)),
 
// // });

// // export default connect(
// //   null,
// //   mapDispatchToProps
// // )(CartItem);


// //export default  withRouter(CartItem);

// const mapDispatchToProps = dispatch => ({
//   deleteItem: item => dispatch(deleteItem(item))
// });


// export default connect(
//   null,
//   mapDispatchToProps
// )(CartItem);





