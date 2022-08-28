import React, { useRef } from 'react';

export default function Marks() {
    const submitIt=useRef(null);
    const submitOut=useRef(null);

    const getMarks =()=>{
        let marks=submitIt.current.value;

        if(marks >=35 && marks <=100){
            submitOut.current.innerHTML="pass"
        }
        else if(marks <35 && marks >0){
            submitOut.current.innerHTML="failed";
        }
        else{
            submitOut.current.innerHTML="invaild";
        }
    }
    return( 
    <div>
      <input ref={submitIt}></input>
      <button type='button' onClick={()=>{
          getMarks();
      }}>your Marks</button>
      <span ref={submitOut}></span>
    </div>
    );
}
