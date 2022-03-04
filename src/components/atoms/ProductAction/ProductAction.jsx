import React from 'react';

export const ProductAction = ({ product }) => {
  
  const { colors, internalMemory } = product;
  
  return (
    <div>
      <div>Color:
        {colors?.map((color) => <button>{color}</button> )}
      </div>
      <div>Memory:
        {internalMemory?.map((memory) => <button>{memory}</button> )}
      </div>
      <button>Add to Cart</button>
    </div>
  )
}