import React from 'react';
import { Link } from 'react-router-dom';

import {Header} from '../components/molecules/Header'
import SearchBar from '../components/SearchBar';
import ProductItem from '../components/ProductItem';
import { Card, Grid } from '@material-ui/core';

const ProductLists = ({ products }) => {
  return (
    <Card>
    <div>
      <h1>Product lists</h1>
      <Header />
      Hola
      <div>
        <SearchBar />
        <Grid container spacing={10}>
          
          {products?.map((product) => {
            return <ProductItem key={product.id} product={product} />
            {/* <Link to={`/${product.id}`} key={product.id}> <ProductItem  product={product} /> </Link> */}
          })}
          
        </Grid>
      </div>
    </div>
    </Card>
  )
}

export default ProductLists;