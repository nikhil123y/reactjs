import logo from './logo.svg';
import './App.css';

// import {data} from './bookslist';
// import Book  from './book';

const booksdata=[
  {
    id:1,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'Rich Dad Poor Dad'.toUpperCase(),
  author:"robert".toUpperCase(),
  desprition:<p>Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Aperiam quis ducimus animi quos commodi quod nobis, voluptatum cumque molestiae laborum.</p>
  },
  {
    id:2,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'The Power of Your Subconscious Mind '.toUpperCase(),
  author:'Joseph Murphy'.toUpperCase(),
  desprition:<p>Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Aperiam quis ducimus animi quos commodi quod nobis, voluptatum cumque molestiae laborum.</p>
  },
  {
    id:3,
    img:'https://images-eu.ssl-images-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title:'The Alchemist'.toUpperCase(),
  author:'Paulo Coelho'.toUpperCase(),
  desprition:<p>Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Aperiam quis ducimus animi quos commodi quod nobis, voluptatum cumque molestiae laborum.</p>
  }
];



function App() {
  return (
    <section className='booklist'>
      {booksdata.map((book) =>{
        // const {img,title,author,desprition}=book ;

        return(
          <Book key={book.id} book={book}></Book>
        )
        
      })}

    </section>
  );
}

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

 

export default App;
