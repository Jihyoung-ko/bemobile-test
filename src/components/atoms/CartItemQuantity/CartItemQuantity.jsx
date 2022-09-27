import React from 'react';
import { useMainState } from '../../../AppContext';
import './CartItemQuantity.css';

export const CartItemQauntity = ({ cartItem }) => {
  const { quantity, id, cartId } = cartItem;

  const { cart, setCart } = useMainState();

  const changeQuantity = (operator) => {
    const newCart = cart.map((item) => {
      if (item.cartId === cartId) {
        return operator === 'increase'
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity };
      }

      return item;
    });
    setCart(newCart);
  };

  const removeItem = (cartId) => {
    const newCart = cart.filter((item) => {
      return item.cartId !== cartId;
    });
    console.log(newCart);
    setCart(newCart);
  };
  const increaseQuantity = () => {
    changeQuantity('increase');
  };

  const decreaseQuantity = () => {
    changeQuantity('decrease');
  };

  return (
    <div className="cart-quantity">
      <button onClick={decreaseQuantity}>-</button>
      <div>{quantity}</div>
      <button onClick={increaseQuantity}>+</button>
      <button onClick={() => removeItem(cartId)}>X</button>
    </div>
  );
};
