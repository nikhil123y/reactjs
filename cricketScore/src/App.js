import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  let [score,setscore]=useState(0)
  let [ballsFaced,ballsPlayed]=useState(0)
  let StrikeRate;

  return (
    <div className="App">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.newindianexpress.com%2Fuploads%2Fuser%2Fimagelibrary%2F2018%2F10%2F29%2Foriginal%2Frohit.jpg&f=1&nofb=1" alt='rohit sharma'/>
      <div className='container'>
        <div>
        <h1>Score:{score}</h1>
        </div>
        <div>
        <h1>ballsPlayed:{ballsFaced}</h1>
        </div>
        <div>
          <h1>StrikeRate:{(StrikeRate=((score/ballsFaced)*100)).toFixed(2)}</h1>
        </div>
        <div>
          <h1>Overs:{((ballsFaced/6)).toFixed(1)}</h1>
        </div>
      </div>
      <div className='container'>  

        <button onClick={() =>{
          setscore(score+0);
          ballsPlayed(ballsFaced+1)
          
          

        }}>Dot</button>
        <button onClick={() =>{
          setscore(score+1);
          ballsPlayed(ballsFaced+1)
          

        }}>Single</button>

        <button onClick={() =>{
          setscore(score+2);
          ballsPlayed(ballsFaced+1)
          

        }}>Double</button>

        <button onClick={() =>{
          setscore(score+3);
          ballsPlayed(ballsFaced+1)
          


        }}>Three runs</button>

        <button onClick={() =>{
          setscore(score+4);
          ballsPlayed(ballsFaced+1)
          


        }}>Four</button>
        <button onClick={() =>{
          setscore(score+6);
          ballsPlayed(ballsFaced+1)
          

        }}>Sixer</button>
      
      </div>
      

    
        
    </div>
  );
}

export default App;
