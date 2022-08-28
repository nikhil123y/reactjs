import React from 'react'
import '../App.css'



const Githubprofile = (props) => {
  return (
    <div class='flex-container'>

        <div class='row'>
        <div className='box'>
            <img src={props.details.avatar_url}/>
            
        </div>
        <p>{props.details.login}</p>

        </div>

            

    </div>
    
  )
}

export default Githubprofile