import Axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setDate]=useState([])
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  useEffect(()=>{
    Axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res =>{
      console.log(" getting from :::",res.data)
      setDate(res.data)
    }).catch(err =>{
      console.log(err)
    })

  },[])
  const postData =(e)=>{
    e.preventDefault();
    Axios.post(`https://jsonplaceholder.typicode.com/posts`,{
      title,
      body 
    }).then(res =>console.log('posting data',res)).catch(err => console.log(err))
  
  }
  

  const arr=data.map((data,index)=>{
    return(
      <tr>
        <td key={data.index}>{data.id}</td>
        <td key={data.index}>{data.title}</td>
        <td key={data.index}>{data.body}</td>
      </tr>

    );
  })
  return (
    <div className="App">
      <h1>nikhil axios</h1>
      <form>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)
        console.log(setTitle)}}/>
        <hr/>
        <label>Body</label>
        <input type="text" value={body} onChange={(e)=> setBody(e.target.value)}/>
        <hr/>
        <button type='button' onClick={postData}>post</button>
      </form>
      <table  style={{border:'1px solid black' }}>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {arr}
      </table>

    </div>
  );
}

export default App;
