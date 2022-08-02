import React from "react";
import { useMainState } from "../../../AppContext";
import ProductItem from "../ProductItem/ProductItem";

export const Cart = () => {
 
  const {cart} = useMainState();

  return <div>
    <h1>Cart Page</h1>
    <div>
      {cart?.map((cartItem) => 
        <ProductItem product={cartItem} />
      )}
    </div>
    
  </div>
}