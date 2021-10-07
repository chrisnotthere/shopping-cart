import { Button } from "@material-ui/core";
import styled from "styled-components";

const CartItem= ({ item, addToCart, removeFromCart}) => (
  <Wrapper>
    <div>
      <h4>{item.title}</h4>
      <div className='information'>
        <p>Price: ${(item.price).toFixed(2)}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
)

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between:
  font-family: arial, helvetica, sans-serif;
  margin-bottom: 1rem;

  div {
    flex: 1;
  }

  .information, .buttons {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightblue;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }

  p {
    margin: 0.25rem;
  }
`;
