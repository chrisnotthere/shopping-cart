import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none' 
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3 className='logo'>Storezilla</h3>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/products'>
          <li>Products</li>
        </Link>
        <Link style={navStyle} to='/cart'>
          <li>Cart <FaShoppingCart /> (0)</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
