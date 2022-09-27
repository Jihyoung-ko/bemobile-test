import React from 'react';
import { useMainState } from '../../../AppContext';
import { Header } from '../../molecules/Header';
import { CartItemQauntity } from '../CartItemQuantity/CartItemQuantity';
import ProductItem from '../ProductItem/ProductItem';

import './Cart.css';

export const Cart = () => {
  const { cart } = useMainState();

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
                <div key={cartItem.id} className="cart-item">
                  <ProductItem product={cartItem} key={cartItem.id} cardType="horizontal" />
                  <CartItemQauntity cartItem={cartItem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
