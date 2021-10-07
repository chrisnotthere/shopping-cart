import React, {useState, useEffect} from 'react';
import { CircularProgress, Grid, Drawer, Badge } from "@material-ui/core";
import ProductItem from './ProductItem';
import styled from "styled-components";

function Products({ handleAddToCart, items, setItems, loading, setLoading, }) {
  
  useEffect(() => {
    fetchProducts();
    //loadProducts();
  }, []);

  //moved state from here to App.js
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    setItems(await fetchProducts());
  }

  const fetchProducts = async () => {
    
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    console.log(data);
    setLoading(true);
    setItems(data);
    //return data;

  }

  return (
    <ProductWrapper>
      <h1 className='products-title'>Products</h1>

      {loading ? 
        <Grid container spacing={3}>
          {items.map(item => (
            <Grid item key={item.id} xs={12} sm={3}>
              <ProductItem item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
        : 
          <div>
            <h1>Loading...</h1>
            <CircularProgress color="secondary" />
          </div>
      }
    </ProductWrapper>

  );
}

export default Products;

const ProductWrapper = styled.div`
  h1{ 
    margin: 2rem;
  }

`;
