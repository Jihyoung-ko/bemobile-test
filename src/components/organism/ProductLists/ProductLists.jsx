import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ProductLists.css";

import {Header} from '../../molecules/Header'
import SearchBar from '../../atoms/SearchBar/SearchBar';
import ProductItem from '../../atoms/ProductItem/ProductItem';

const ProductLists = ({ products }) => {

  const [query, setQuery] = useState("");

  const searchHandler = (searchTerm) => {
    setQuery(searchTerm);
  }

  const filteredProducts = products.filter((product => product.brand.toLowerCase().includes(query) || product.model.toLowerCase().includes(query)))

  return (
    <div>
      <Header />
      <div className='container'>
        <SearchBar onSearch={searchHandler} />
        <div className='listContainer'>
          {filteredProducts?.map((product) => {
            return <Link to={`/${product.id}`} key={product.id}> 
                    <ProductItem product={product} />
                   </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductLists;