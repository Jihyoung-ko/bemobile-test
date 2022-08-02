import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const { brand, model, price, imgUrl, color, memory } = product;
  
  return (
    <div className='productCard'>
      <img src={imgUrl} alt={model} />
      <div>
        <h4>{model}</h4>
        <h4>{brand}</h4>
        {color ? <h4>{color}</h4> : <p></p> }
        {memory ? <h4>{memory}</h4> : <p></p> }
        {price ?  <p>{price}€</p> : <p>No disponible</p>
        }
      </div>
    </div>
  )
};

export default ProductItem;