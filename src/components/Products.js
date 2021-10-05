import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import '../styles/Products.css'

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const products=[]

    try{
      for (let i = 15; i <= 20; i++) {
        const data = await fetch(`https://fakestoreapi.com/products/${i}`);
        const items = await data.json();
        console.log(items);
        products.push(items);
      }
      setLoading(true);
      setItems(products);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="products">
      <h1 className='products-title'>Products</h1>

      <div className='product-grid'>
      {loading ? 
        items.map(item => (
            <Card 
              key={item.id}
              className='product-card' 
              style={{ width: '12rem' }}
              border="success" 
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Link className='product-header' to={`products/${item.id}`}>
                  <Card.Title>{item.title}</Card.Title>
                </Link>
                <Card.Text className='card-text'>${item.price}</Card.Text>
              </Card.Body>
                <Button variant="primary">Add to cart</Button>
            </Card>
        ))
        : 
          <div>
            <h1>Loading...</h1>
            <ReactBootstrap.Spinner animation='border' variant="success" />
          </div>
      }
      </div>
    </div>
  );
}

export default Products;
