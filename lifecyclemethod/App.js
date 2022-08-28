
import './App.css';
// import Nav from './Nav';
import React, { Component } from 'react'
import Nav from './Nav';

export default class App extends Component {
  constructor(){
    super()

    this.state={
        show:true
    }
    console.log("constructor")
}
componentDidMount(){
    console.log("constructor didamout")
}
render() {
console.log("constructor render")
 return (
   <div>
       <h1>Life cycle</h1>
       {
         this.state.show ? 
         <Nav/>
         :null
       }
       <button onClick={()=>{
         this.setState({show:!this.state.show})
       }}>toggle nav </button>
    </div>
 )
}
}

