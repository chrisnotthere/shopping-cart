import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Badge, IconButton } from "@material-ui/core";
import styled from "styled-components";

const getTotalItems = (items) =>
items.reduce((acc, item) => acc + item.amount, 0);

function Nav({setCartOpen, cartItems}) {
  const navStyle = {
    color: 'white',
    textDecoration: 'none' 
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h4 className='logo'>Storezilla</h4>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/products'>
          <li>Products</li>
        </Link>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton> 
      </ul>
    </nav>
  );
}

const StyledButton = styled(IconButton)`
  // position: fixed;
  // z-index: 100;
  // right: 20px;
  // top: 20px;
  color: white;

`;

export default Nav;
