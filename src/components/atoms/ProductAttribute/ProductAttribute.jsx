import React from 'react';
import './ProductAttribute.css'

export const ProductAttribute = (props) => {

  const {mainElement, selectAttribute, elementKey, selected} = props;

  return <div className={`container ${selected ? 'selected' : ''}`} onClick={(attribute) => selectAttribute(elementKey)}>{mainElement}</div>
}