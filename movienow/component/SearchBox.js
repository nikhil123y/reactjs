import React from 'react'

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4 mr-5'>
        <input className='form-control' 
        value ={props.value} 
        onChange={(event)=> props.setSearchValue(event.target.value)}
        placeholder='Search Movies TvShow '></input>
    </div>
  )
}

export default SearchBox