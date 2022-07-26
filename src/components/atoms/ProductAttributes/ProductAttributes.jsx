import React from "react";
import { ProductAttribute } from "../ProductAttribute/ProductAttribute";
import './ProductAttributes.css'


export const ProductAttributes = (props) => {

  const {
      attributes, 
      title, 
      selectedProduct,
      category,
      setSelectedProduct
  } = props;

  return <div className="product-attributes__container">
    <div>{title}</div>
    {attributes?.map(attribute => {
    
        const isProductSelected = selectedProduct[category] === attribute;

      return <ProductAttribute 
        attribute={attribute} 
        selected={isProductSelected}
        setSelectedProduct={setSelectedProduct}
        category={category}
        selectedProduct={selectedProduct}
      />
    })}
  </div>
}