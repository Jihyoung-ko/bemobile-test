import React from 'react';
import './ProductAttribute.css'

export const ProductAttribute = (props) => {

  const {
    attribute, 
    selected, 
    setSelectedProduct, 
    category,
    selectedProduct
  } = props;

const selectProduct = () => {
  setSelectedProduct({
    ...selectedProduct,
    [category]: attribute
  })
}

return <div 
className={`product-attribute__container ${selected ? 'selected' : ''}`} 
onClick={selectProduct}
>
  {attribute}
</div>
}