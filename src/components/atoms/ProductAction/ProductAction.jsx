import { ConstructionOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useMainState } from '../../../AppContext';
import { ProductAttributes } from '../ProductAttributes/ProductAttributes';


export const ProductAction = ({ product }) => {
  
  const { model, imgUrl, colors, internalMemory, brand, price } = product;

  const {cart, setCart} = useMainState();

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    setSelectedProduct({
      brand,
      price,
      model, 
      imgUrl, 
      'color': colors?.[0], 
      'memory': internalMemory?.[0] 
    })
  },[model, imgUrl, colors, internalMemory])


  const createAttributes = (attributes) => {
    return attributes?.map(attribute => {
      if(attribute){
        return attribute
      }
    })
  }

  const colorAttributes = createAttributes(colors);

  const memoryAttributes = createAttributes(internalMemory);

  const productProperties = [
    {
      attributes: colorAttributes,
      title: 'Color',
      category: 'color'
    },
    {
      attributes: memoryAttributes,
      title: 'Memory',
      category: 'memory'
    }
  ]

  const addToCart = () => {
    setCart([...cart, selectedProduct])
  }
  
  return (
    <div>
      <h3>Buy {model}</h3>
        {productProperties.map(property => {
          return <ProductAttributes 
            attributes={property.attributes} 
            title={property.title} 
            selectedProduct={selectedProduct}
            category={property.category}
            setSelectedProduct={setSelectedProduct}
          />
        })}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}