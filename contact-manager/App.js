
import './App.css';
import React,{useState} from 'react';
import Header from './component/Header'
import AddContact from './component/AddContact'
import ContactList from './component/ContactList'

function App() {
  const [contacts,setConatcts]=useState([]);
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      
      
    </div>
  );
}

export default App;
