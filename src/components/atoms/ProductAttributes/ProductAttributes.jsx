import React, { useState } from "react";
import { ProductAttribute } from "../ProductAttribute/ProductAttribute";

export const ProductAttributes = () => {
  
  const [selectedAttribute, setSelectedAttribute] = useState("black");

  const selectAttribute = (attribute) => {
    setSelectedAttribute(attribute)
  }

  

  return <div>
    <ProductAttribute mainElement="Black" elementKey="black" selectAttribute={selectAttribute} selected={true}/>
    <ProductAttribute mainElement="White" elementKey="white" selectAttribute={selectAttribute} selected={false} />
  </div>
}