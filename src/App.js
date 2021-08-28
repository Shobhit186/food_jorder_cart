import Navigation from './Components/Navigation';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './Components/Header';
import Items from './Components/Items';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';
import SingleItem from './Components/SingleItem';

function App() {
  return (
    <>
    <CartProvider>
     <Router>
     <Navigation />
     
     <Switch>
       <Route path="/" exact component={Header}></Route>
       <Route path="/products" exact component={Items}></Route>
       <Route path="/products/:id" component={SingleItem}></Route>
       <Route path="/cart" component={Cart}></Route>
     </Switch>
     
     </Router>
     </CartProvider>
    </>
  );
}

export default App;
