import React,{useState,useEffect,useRef} from 'react';

const image=()=>{

    const nikhil=[{
        id:1,
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.findhealthtips.com%2Fwp-content%2Fuploads%2F2019%2F06%2FTELEMMGLPICT000200907210_trans_NvBQzQNjv4BqDijfCOMDtuyWS63sbX0ZBPAcpFlzkE_ZvLeUcYCpFr4.jpeg&f=1&nofb=1",
    }];

}
        

function UseEffectComponent() {
    const[count,setCount]=useState(0);
    const[wicket,setWicket]=useState(0)
    const dot=useRef(null);
    useEffect(()=>{
        console.log("component DidMount");
        return()=>{
            console.log("component WillUnmount")
        }
    },[])
    // useEffect(()=>{
       
    // },[])
  return( 
  <div>
      <h1>{count}:{wicket}</h1>
      <h1 ref={dot}></h1>
     <button onClick={()=>{setCount(count+0)
     console.log("Dot.....")

    }}>Dot</button>
     <button className='btn-primary' onClick={()=>{setCount(count+1)
    console.log("Single.....")}
    }>Single</button>
     <button onClick={()=>{setCount(count+2)
    console.log("Double.....")}}>Double</button>
     <button onClick={()=>{setCount(count+3)
    console.log("Three.....")}}>Three</button>
     <button onClick={()=>{setCount(count+4)
    console.log("Four.....")}}>Four</button>
     <button onClick={()=>{setCount(count+6)
    console.log("Six.....")}}>Six</button>
     <button onClick={()=>{
         setWicket(wicket+1)
         if(wicket==10){
            setWicket(wicket==null) 
         }
         console.log("Wicket")
         
         }}>Wicket</button>
  </div>
  );
}

export default UseEffectComponent;
