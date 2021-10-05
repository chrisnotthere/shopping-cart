/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function ProductDetail({match}) {
  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState({
    // to fix 'sprites is not defined'
    //sprites: {}
  });

  const [loading, setLoading] = useState(false);


  const fetchProduct = async () => {
    try{
      const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
      const product = await fetchItem.json();

      setProduct(product);
      console.log(product);
      setLoading(true);
    } 
    catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Products">

      {loading ? 
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt='' width='250px' />
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div> 
      : <ReactBootstrap.Spinner animation='border' variant="success" />}

    </div>
  );
}

export default ProductDetail;
