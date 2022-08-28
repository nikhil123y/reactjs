
import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [num,setnum]=useState();
  const [moves,setmoves]=useState();
  const [name,setname]=useState();
  useEffect(()=>{
    async function getData(){
      const res=await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`);

        console.log(res.data.forms[0].name);
        setname(res.data.forms[0].name);
        setmoves(res.data.moves.length)
    }
    getData();
  })
  return (
    <div className="App">
      <h1>you chose {num} the value</h1>

      <select value={num} onChange={(event)=>{
        setnum(event.target.value);
      }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <h2>
        you chose this {name} pokemon
      </h2>
      <h3>the number of moves are ={moves}</h3>
    </div>
  );
}

export default App;
