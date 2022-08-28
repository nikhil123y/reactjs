
import './App.css';
import { BrowserRouter as Routing,Switch,Route} from 'react-router-dom'
import Header from './Container/Header';
import ProductListing from './Container/ProductListing';
import ProductDetail from './Container/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Routing>
      <Header/>
      <Switch>
           <Route path="/" component={ProductListing} exact/>
           <Route path="/product/:productId" exact component={ProductDetail}/>
           <Route>404 not Found</Route>
      </Switch>
      </Routing>
      
    </div>
  );
}

export default App;
