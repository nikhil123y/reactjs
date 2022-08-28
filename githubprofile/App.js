
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{ useState } from 'react';
import { useEffect } from 'react';
import Githubprofile from './component/Githubprofile';

function App() {

  const[github,setGithub]=useState([]);

  useEffect(()=>{
    getGithubDetailsFromServer();
  },[]);

  const getGithubDetailsFromServer=async()=>{

    let rawGithubDetails=await fetch(`https://api.github.com/users`);
    let convertedGithubDetails=await rawGithubDetails.json();

    setGithub(convertedGithubDetails);

    console.log(convertedGithubDetails);

  };

  return (
    <div className="App">{
      github.map((githubObj)=>{
        console.log(githubObj);

        return <Githubprofile details={githubObj}/>
      })
    }
      
    </div>
  );
}

export default App;
