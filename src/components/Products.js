import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import * as ReactBootstrap from 'react-bootstrap';
// import { Card, Button } from 'react-bootstrap';
import { CircularProgress, Grid, Drawer, Badge } from "@material-ui/core";
import ProductItem from './ProductItem';
import styled from "styled-components";

function Products({ handleAddToCart }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try{
      const data = await fetch(`https://fakestoreapi.com/products/`);
      const items = await data.json();
      console.log(items);
      setLoading(true);
      setItems(items);
    } catch (e) {
      console.log(e);
    }
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
