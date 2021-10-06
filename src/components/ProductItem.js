import { Button } from "@material-ui/core";
import styled from "styled-components";

const ProductItem = ({ item, handleAddToCart }) => (
  <ProductWrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button variant="contained" onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </ProductWrapper>
);

export default ProductItem;


const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  margin: 0.5rem;
  // padding 3rem;

  button {
    border-radius: 0 0 20px 20px;
    background-color: white;
  }

  img{
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.5rem;
    height: 100%;
    background-color: black;
  }
`;
