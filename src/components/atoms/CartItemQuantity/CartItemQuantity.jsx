import React from 'react';
import { useMainState } from '../../../AppContext';

export const CartItemQauntity = ({ cartItem }) => {
  const { quantity, id } = cartItem;

  const { cart, setCart } = useMainState();

  const changeQuantity = (operator) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return operator === 'increase'
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item, quantity: item.quantity > 0 ? item.quantity : item.quantity - 1 };
      }

      return item;
    });
    setCart(newCart);
  };

  const increaseQuantity = () => {
    changeQuantity('increase');
  };

  const decreaseQuantity = () => {
    changeQuantity('decrease');
  };

  return (
    <div>
      <button onClick={decreaseQuantity}>-</button>
      <div>{quantity}</div>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};
