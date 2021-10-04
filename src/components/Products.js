import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([]);


  const fetchProducts = async () => {
    const products=[]

    for (let i = 1; i <= 9; i++) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const items = await data.json();
      products.push(items);
    }

    setItems(products);
  }

  return (
    <div className="Products">
      <h1>Products page</h1>
      {items.map(item => (
        <h3 key={item.id}>
          <Link to={`products/${item.id}`}>{item.name}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Products;
