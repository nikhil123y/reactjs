import React from 'react'

const AddContact = () => {
    const state={
        name:"",
        email:""
    }
    const add=(e)=>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ''){
            alert("all the field are mandatory");
            return
        }
        console.log(this.state)
    }
  return (
    <>
    <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={add()}>
            <div className='field'>
                <label>Name</label>
                <input type="text" name="name" value={state.name} placeholder="Enter Name" onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/>
            </div>
            <div className='field'>
            <label>Email</label>
            <input type="text" name="email" placeholder='Enter email'/>
            </div>
            <button className='ui button yellow'>Add</button>
                
  

        </form>
    </div>
    </>
  )
}

export default AddContact