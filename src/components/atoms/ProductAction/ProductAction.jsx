import React, { useEffect, useState } from 'react';
import { useMainState } from '../../../AppContext';
import { ProductAttributes } from '../ProductAttributes/ProductAttributes';

export const ProductAction = ({ product }) => {
  const { model, imgUrl, colors, internalMemory, brand, price, id } = product;

  const { cart, setCart } = useMainState();

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    setSelectedProduct({
      id,
      brand,
      price,
      model,
      imgUrl,
      color: colors?.[0],
      memory: internalMemory?.[0]
    });
  }, [model, imgUrl, colors, internalMemory]);

  const createAttributes = (attributes) => {
    return attributes?.map((attribute) => {
      if (attribute) {
        return attribute;
      }
    });
  };

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
  ];

  const addToCart = () => {
    let productToAdd = { ...selectedProduct };

    const productToAddCartId =
      `${productToAdd.id} ${productToAdd.color} ${productToAdd.memory} `.replace(/\s/g, '');

    const existingProduct = cart.find((product) => product.cartId === productToAddCartId);

    if (!existingProduct) {
      setCart([
        ...cart,
        {
          ...productToAdd,
          quantity: 1,
          cartId: productToAddCartId
        }
      ]);
    } else {
      const tempCart = cart.map((product) => {
        if (product.id === productToAdd.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      setCart(tempCart);
    }
  };

  return (
    <div>
      <h3>Buy {model}</h3>
      {productProperties.map((property) => {
        const { title, attributes, category } = property;
        return (
          <ProductAttributes
            key={title}
            attributes={attributes}
            title={title}
            selectedProduct={selectedProduct}
            category={category}
            setSelectedProduct={setSelectedProduct}
          />
        );
      })}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};
