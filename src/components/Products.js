import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const products=[]

    try{
      for (let i = 1; i <= 3; i++) {
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
    <div className="Products">
      <h1>Products</h1>

      {loading ? 
        items.map(item => (
          <h4 key={item.id}>
            <Link to={`products/${item.id}`}>{item.title}</Link>
          </h4>
        ))
      : <ReactBootstrap.Spinner animation='border' />}

    </div>
  );
}

export default Products;
