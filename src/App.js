import './styles/App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { Drawer } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev => {
      //is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      //console.log(clickedItem);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //first time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  return (
    <Router>
      <div className="App">
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <Nav 
          setCartOpen={setCartOpen}
          cartItems={cartItems}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route 
            path='/products' 
            exact 
            component={() => <Products 
                handleAddToCart={handleAddToCart} 
                items={items}
                setItems={setItems}
                loading={loading}
                setLoading={setLoading}
              />} 
          />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
