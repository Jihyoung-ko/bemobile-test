import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../../molecules/Header';
import { ProductDescr } from '../../atoms/ProductDescription/ProductDescr';
import { ProductAction } from '../../atoms/ProductAction/ProductAction';

const ProductDetails = () => {
  const { id } = useParams()
  
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  
  const fetchProduct = () => {
    setLoading(true);
    axios.get(`https://front-test-api.herokuapp.com/api/product/${id}`).then(res => {
      setLoading(false);
      setProduct(res.data);
      console.log('res', res.data)})
      .catch(error => {
      setLoading(false);
      console.log('error',error)});
    }
  
  useEffect(() => {
    fetchProduct()
  }, []);  

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }  

  const {  model, imgUrl } = product;

  return(
    <div>
      <Header />
      <div>
        <div>
          <img src={imgUrl} alt={model} />
        </div>
        <div>
          <ProductDescr product={product} />
          <ProductAction product={product} />
        </div>
      </div>
    </div>
    
  )
}

export default ProductDetails;