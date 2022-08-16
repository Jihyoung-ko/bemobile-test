import React from 'react';
import { useMainState } from '../../../AppContext';
import { Header } from '../../molecules/Header';
import ProductItem from '../ProductItem/ProductItem';
import './Cart.css';

export const Cart = () => {
  const { cart } = useMainState();

  console.log(cart);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="cart-container">
        <div className="cart-wrapper">
          <h1>Cart Page</h1>
          <div>
            {cart?.map((cartItem) => {
              return (
                <div key={cartItem.id}>
                  <ProductItem product={cartItem} key={cartItem.id} cardType="horizontal" />
                  <p>{cartItem.quantity}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
