import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams()
  console.log(id);
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
  return(
    <div>
      Product Details
    </div>
  )
}

export default ProductDetails;