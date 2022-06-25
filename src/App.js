import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import ProductLists from './components/organism/ProductLists/ProductLists';
import ProductDetails from './components/organism/ProductDetails/ProductDetails';

const url = 'https://front-test-api.herokuapp.com/api/product';

function App() {

  const [loading, setLoading] = useState(true);
  const [products, setProcuts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
      axios.get(url).then(res => {
      setLoading(false);
      setProcuts(res.data);
      console.log(res.data)})
    .catch(error => {
      setLoading(false);
      console.log('error',error)});
  }

  useEffect(() => {
    fetchProducts()
  }, []);  

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ProductLists products={products} />
        </Route>
        <Route exact path="/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
