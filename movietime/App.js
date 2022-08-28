import React from 'react';
 import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import './App.scss';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MovieDetail from './component/MovieDetail/MovieDetail'
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
      <div className='conatiner'>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/movie/:imdbID'component={MovieDetail}/>
      <Route component={PageNotFound}/>
      </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
