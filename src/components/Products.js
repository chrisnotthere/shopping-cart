import React, { useEffect } from 'react';
import { CircularProgress, Grid } from "@material-ui/core";
import ProductItem from './ProductItem';
import styled from "styled-components";

function Products({ handleAddToCart, items, setItems, loading, setLoading, }) {
  
  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    //console.log(data);
    setLoading(true);
    setItems(data);
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
