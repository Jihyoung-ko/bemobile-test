import React from 'react';
import { Link } from 'react-router-dom';

import {Header} from '../../molecules/Header'
import SearchBar from '../../atoms/SearchBar/SearchBar';
import ProductItem from '../../atoms/ProductItem/ProductItem';
import { Card } from '@mui/material';
const ProductLists = ({ products }) => {
  return (
    <Card>
    <div>
      <h1>Product lists</h1>
      <Header />
      <div>
        <SearchBar />
        <div container spacing={10}>
          
          {products?.map((product) => {
            return <Link to={`/${product.id}`} key={product.id}> <ProductItem product={product} /> </Link>
          })}
          
        </div>
      </div>
    </div>
    </Card>
  )
}

export default ProductLists;