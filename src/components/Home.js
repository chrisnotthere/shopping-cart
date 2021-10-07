import '../styles/Home.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <main>
      <div className='store-title'>
        <h1>Storezilla</h1>
      </div>
      <h4 className='store-desc'>Just imagine this is a witty description of the store...</h4>
      <Link to='/products' className='view-products'>
        <Button variant="outline-info">View Products</Button>{''}
      </Link>
    </main>
  );
}

export default Home;
