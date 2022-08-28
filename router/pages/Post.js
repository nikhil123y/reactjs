import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Post = () => {

    const {id} = useParams();

    const query = new URLSearchParams(useLocation().search);
  return (
    <div>
        <h2>
            Id is={id} 
        </h2>
        <h2>
            {query.get('name')}
        </h2>
        <h1>
            {query.get('last')}
        </h1>
    </div>
  )
}

export default Post