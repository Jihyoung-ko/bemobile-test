import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = (props) => {
  const { product, cardType } = props;
  const { brand, model, price, imgUrl, color, memory, id } = product;

  return (
    <Link to={`/${id}`} key={id}>
      <div className={cardType}>
        <div className="productCard">
          <img src={imgUrl} alt={model} />
          <div>
            <h4>{model}</h4>
            <h4>{brand}</h4>
          </div>
          {color ? <h4>{color}</h4> : <p></p>}
          {memory ? <h4>{memory}</h4> : <p></p>}
          {price ? <p>{price}€</p> : <p>No disponible</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
