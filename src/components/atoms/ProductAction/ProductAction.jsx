import React from 'react';
import { useMainState } from '../../../AppContext';
import { ProductAttributes } from '../ProductAttributes/ProductAttributes';


export const ProductAction = ({ product }) => {
  
  const { model, colors, internalMemory } = product;

  const {cart, setCart} = useMainState();

  const createAttributes = (attributes) => {
    return attributes?.map(attribute => {
      if(attribute){
        return {
          mainElement: attribute,
          elementKey: attribute.toLowerCase()
        }
      }
    })
  }

  const colorAttributes = createAttributes(colors);

  const memoryAttributes = createAttributes(internalMemory);

  const productProperties = [
    {
      attributes: colorAttributes,
      title: 'Color'
    },
    {
      attributes: memoryAttributes,
      title: 'Memory'
    }
  ]

  const addToCart = () => {}
  
  return (
    <div>
      <h3>Buy {model}</h3>
        {productProperties.map(property => {
          return <ProductAttributes attributes={property.attributes} title={property.title} />
        })}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}