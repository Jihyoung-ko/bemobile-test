import React from 'react';
import { Link } from 'react-router-dom';

import {Header} from '../../molecules/Header'
import SearchBar from '../../atoms/SearchBar/SearchBar';
import ProductItem from '../../atoms/ProductItem/ProductItem';

const ProductLists = ({ products }) => {
  return (
    <div>
      <Header />
      <div>
        <SearchBar />
        <div>
          {products?.map((product) => {
            return <Link to={`/${product.id}`} key={product.id}> <ProductItem product={product} /> </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductLists;