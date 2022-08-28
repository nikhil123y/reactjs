
import { createContext } from 'react';
import './App.css';
import ComA from './component/ComA';

const FirstName= createContext();
const LastName=createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"nikhil"}>
        <LastName.Provider value={"nikki"}>
        <ComA/>
      </LastName.Provider>

      </FirstName.Provider>
      
    </div>
  );
}

export default App;
export {FirstName,LastName}
