import React from 'react';

const ProductItem = ({ product }) => {
  const { id, brand, model, price, imgUrl } = product;
  return (
    <div>
      <img src={imgUrl} alt={model} />
      <div>
        <h4>{model}</h4>
        <h4>{brand}</h4>
        <p>{price}€</p>
      </div>
    </div>
  )
};

export default ProductItem;