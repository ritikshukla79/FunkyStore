// import React, { useState } from 'react';
import { addToCart } from '../../Reduxe/slice/cartSlice/cartSlice';
import './CartItem.css';

// interface CartItemProps {
//   item: {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     quantity: number;
//   };
//   onQuantityChange: (itemId: number, newQuantity: number) => void;
//   onRemove: (itemId: number) => void;
// }

const CartItem = ({item , quantity}) => {
//   const [quantity, setQuantity] = useState(item.quantity);

//   const handleQuantityChange = (newQuantity: number) => {
//     // setQuantity(newQuantity);
//     // onQuantityChange(item.id, newQuantity);
//     dispatch(addToCart(item.qty))
//   };

//   const handleRemove = () => {
//     onRemove(item.id);
//   };

  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <div className="quantity-control">
          <button >-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
        <p>Total: ${item.price * 1}</p>
      </div>
      <button className="remove-button">Remove</button>
    </div>
  );
};

export default CartItem;
