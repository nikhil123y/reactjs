import React,{useState} from 'react';
import './App.css';
import bootstrap from 'bootstrap';
import UseEffectComponent from './UseEffectComponent';

function App() {
  const[page,setPage]=useState(true)
  return (
    <div className="App">
      <div className='container'>
        <div className='card'>
          <div className='cardImg'></div>
          {page==true?<UseEffectComponent/>:null}
          <button onClick={()=>{setPage(true)}}>enter</button>
          <button onClick={()=>{setPage(false)}}>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
