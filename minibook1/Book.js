import React from 'react';

const Book =(props) =>{
    console.log(props);
    //properties we are looking for book
    const {img,title,author,desprition} =props.book;
  
    const clickHandler = (e) =>{
      console.log(e)
      console.log(e.target)
      alert('hello world');
    }
  
    const complexExample =(author) =>{
      console.log(author);
  
    }
   
  
   return( 
   <article className='book' onMouseOver={() =>{
     console.log(author)
   }}>
     <img src={img} alt=""/>
     <h1 onClick={() => console.log(title)}>{title}</h1>
     <h3>{author}</h3>
     <p>{desprition}</p>
     <button type='button' onClick={clickHandler}>Buy It</button>
     <button type="button" onClick={ () => complexExample(author)}>more complex example</button>
   </article>
   );  
  }

export default Book;
