import React from 'react';
import './ProductAttribute.css'

export const ProductAttribute = (props) => {

  const {mainElement, selectAttribute, elementKey, selectedAttribute} = props;

  return <div 
    className={`product-attribute__container ${selectedAttribute === elementKey? 'selected' : ''}`} 
    onClick={(attribute) => selectAttribute(elementKey)}>
      {mainElement}
    </div>
}