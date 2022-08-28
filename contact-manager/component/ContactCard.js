import React from 'react'
import user from '../images/user.jpg'
import '../Style.css'

const ContactCard = (props) => {
    const {id,name,email}=props.contact;
  return (
    <>
    <div className="item">
      <img className="ui avatar image" id="iconwi" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon" id='iconpos'
        onClick={() => props.clickHander(id)}
        
      ></i>
    </div>
    
    
    </>
  );
}

export default ContactCard