import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const { brand, model, price, imgUrl } = product;
  return (
    <div className='productCard'>
      <img src={imgUrl} alt={model} />
      <div>
        <h4>{model}</h4>
        <h4>{brand}</h4>
        {price ?  <p>{price}€</p> : <p>No disponible</p>
        }
      </div>
    </div>
  )
};

export default ProductItem;