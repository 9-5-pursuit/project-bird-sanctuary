import React, { useState } from 'react'
//Checkout component
// 1.Keep track of the information entered
// 2. Handle form sunmit
// 3. Handle input changes

 export default function Checkout({reset}){

  const [user, setUser] = useState({
    //must match input id
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  })

  function handleSubmit(event){
    event.preventDefault();
    alert("You have adoopted birds. Thank you!")

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    })

    reset()
  }

  function handleTextChange(event){
    setUser({
      ...user,
    [event.target.id]: event.target.value
    })
  }
  return(
    <div className='Checkout'>
      <h2>Check Out </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input id='firstName' name='firstName' type='text' value={user.firstName}
        onChange={handleTextChange} required/>

        <label htmlFor='lastName'>Last Name</label>
        <input id='lastName' name='lastName' type='text' value={user.lastName}
        onChange={handleTextChange} required/> 

        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='email' value={user.email}
        onChange={handleTextChange} required/>

        <label htmlFor='zip'>Zipcode </label>
        <input id='zip' name='zip' type='number' value={user.zip}
        onChange={handleTextChange} required/>

        <input type="submit"/>
      </form>
    </div>
  )
}