import React, { useState, useEffect } from "react";
import { ProductAttribute } from "../ProductAttribute/ProductAttribute";
import './ProductAttributes.css'


export const ProductAttributes = (props) => {

  const {attributes, title} = props;
  
  const [selectedAttribute, setSelectedAttribute] = useState();

  useEffect(() => {
    setSelectedAttribute(attributes?.[0].elementKey)
  }, [attributes]);  

  const selectAttribute = (attribute) => {
    setSelectedAttribute(attribute)
  }
  

  return <div className="product-attributes__container">
    <div>{title}</div>
    {attributes?.map(attribute => {
      return <ProductAttribute mainElement={attribute.mainElement} elementKey={attribute.elementKey} selectAttribute={selectAttribute} selectedAttribute={selectedAttribute}/>
    })}
  </div>
}