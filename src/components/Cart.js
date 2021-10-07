import styled from "styled-components";
import CartItem from "./CartItem";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

function Cart({ cartItems, addToCart, removeFromCart, checkout }) {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <CartWrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3>Order Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
      <div className='checkout-btn-container'>
        <Button
          className='checkout-btn'
          size='small'
          colour='success'
          endIcon={<AddShoppingCartIcon />}
          variant='contained'
          onClick={() => checkout()}
        >
          Checkout
        </Button>
      </div>
    </CartWrapper>
  );
}

export default Cart;

const CartWrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

  * {
    color: black;
  }

  h3 {
    margin-top: 1rem;
  }

  h2 {
    border-bottom: 1px solid lightblue;
  }

  h3{ 
    text-align: center;
  }

  .checkout-btn-container {
    margin: 1rem;
    display: flex;
    justify-content: center;
  }

  .checkout-btn {
    width: 50%;
  }
`;
