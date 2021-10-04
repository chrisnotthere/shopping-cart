import './styles/App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/products/:id' component={ProductDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
