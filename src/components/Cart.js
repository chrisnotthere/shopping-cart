import styled from "styled-components";
import CartItem from "./CartItem";

function Cart({ cartItems, addToCart, removeFromCart }) {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);


  return (
    // <div className="Cart">
    //   <h3>your shopping cart</h3>
    // </div>
    <Wrapper>
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
  </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
  // color: black;

  * {
    color: black;
  }

  h3 {
    // border-top: 1px solid lightblue;
    margin-top: 1rem;
  }

  h2 {
    border-bottom: 1px solid lightblue;
  }


`;

