import React from 'react'
import { useState } from 'react'

function Checkout({resetCart}) {
const [user, setUser] = useState(
    {
        firstName:"",
        lastName: "",
        email: "",
        zip: "",
    })

function handleTextChange(event){
    setUser({
        ...user,
        [event.target.id] : event.target.value,
    })
}

function reset(){
    setUser({
        firstName:"",
        lastName: "",
        email: "",
        zip: "",
    })
    resetCart();
}

function handleSubmit(event){
    event.preventDefault();
    alert("You have adopted birds. Thank you!")
    reset();
}

  return (
    <form className='Checkout' onSubmit={handleSubmit}>
        
        <h4>Checkout</h4>

        <label htmlFor='firstName'>First Name</label> <br/>
        <input type="text" id='firstName' onChange={handleTextChange} value={user.firstName}/>

        <label htmlFor='lastName'>Last Name</label> <br/>
        <input type="text" id='lastName' onChange={handleTextChange} value={user.lastName}/>

        <label htmlFor='lastName'>Email</label> <br/>
        <input type="email" id='email' onChange={handleTextChange} value={user.email}/>

        <label htmlFor='zip'>Zip Code</label> <br/>
        <input type="number" id='zip' onChange={handleTextChange} value={user.zip}/> <br/>

        <input className='checkout_submit' type="submit" value="Submit" />
    
    </form>
    
  )
}

export default Checkout