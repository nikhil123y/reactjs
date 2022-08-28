import React,{useEffect,useState,useRef} from 'react'
import './App.css';

function App() {

  const API_KEY = 'fff2b437ef070847fbf50925f9dcd02d	';
  const inputRef=useRef(null)
  const API_ID='cab5e396';
  const [ingredientList,updateIngredientList]=useState([]);
  const [loading,setloading]=useState(false);
  const search=()=>{
    console.log("input ref ",inputRef);
    searchForRecipe(inputRef.current.value);
    inputRef.current.value="";
  }
  const searchForRecipe= query =>{
    setloading(true)
    let url=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
    fetch(url).then(response=>{
      return response.json()
    },5000)
    .then(res=>{ 
      console.log(res.hits);
      updateIngredientList(res.hits);
      setloading(false)
    })
    .catch(err=>{
      console.log("errro",err);
      setloading(false); 
    })

  }

  useEffect(()=>{
    searchForRecipe('chicken','egg');
  },[]);

  
  return (
    <div className="App">
      <header className='App-header'>
        <div className='input-wrapper'>
          <input ref={inputRef} placeholder='Search for recipe'/>
          <button onClick={search} type="button">submit</button>
        </div>
        {loading &&<p>loading...</p>}
        <div className='Wrapper'>
          {ingredientList.map(({recipe})=>{
            // const {label,image,ingredientLines}=recipe;
            return(
              
              <div key={recipe.label} className='Ingredient'>
                <span>{recipe.label}</span>
                <img src={recipe.image} alt='recipe'/>
                <div className='Steps'>
                {recipe.ingredientLines.map((step,index)=>{
                  return <p key={index}>{step}</p>;
                })}
                </div>
              </div>
              

            );

          })}

        </div>

      </header>
      
    </div>
  );
}

export default App;
