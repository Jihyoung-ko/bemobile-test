import React from 'react';
import { ProductAttributes } from '../ProductAttributes/ProductAttributes';


export const ProductAction = ({ product }) => {
  
  const { model, colors, internalMemory } = product;
  
  return (
    <div>
      <h3>Buy {model}</h3>
      <div>Color:
        {colors?.map((color) => <button>{color}</button> )}
      </div>
      <div>Memory:
        {internalMemory?.map((memory) => <button>{memory}</button> )}
      </div>
      <button>Add to Cart</button>
      <ProductAttributes/>
    </div>
  )
}