
import './App.css';
import Header from './component/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Post from './pages/Post';
import { useState } from 'react';

function App() {
  const [login,setLogin]=useState(false);
  return (
    <BrowserRouter>
       <div className="App">
        <Header/>

        <button onClick={()=> setLogin(!login)}>{
        login?'logout ':'login'}</button>

        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} /> 
            {/* Redirect method */}
            {/* <Route path='/profile'>
              {login?<Profile/> :<Redirect to='/'/>}
            </Route> */}
            <Route path='/post/:id'component={Post}/>
            {/* useHistory */}
            <Route path='/profile'>
              <Profile login={login}/>

            </Route>
            <Route component={Notfound}/>
        </Switch>
      </div>               
    </BrowserRouter>
  );
}

export default App;
