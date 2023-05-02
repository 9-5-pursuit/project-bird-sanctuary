import React from "react";

import {useState} from "react";
//import {v1 as generateUniqueID} from 'uuid'

 export default function BirdForm(){
    const [user, setuser] = useState({
        firstName:"",
        lastName:"",
        email:"",
         zip:"",
    
 });

 function handleSubmit(e){
     e.preventDefault();
     resetForm()
   }  
   function handleTextChange(e){
  

       setuser({
         ...user,
        [e.target.id]: e.target.value
      });
     }
     function resetForm(){
      setuser({
        firstName:"",
        lastName:"",
        email:"",
         zip:"",
      })
     }

     
     return (
      
    


               <div className="App">
          <form onSubmit={handleSubmit}>
             <h2>Checkout</h2>
         
          <label htmlFor="name">First Name:</label>
           <input
           type="text"
           id="firstName"
           name="firstname"
           value={user.firstName}
          onChange={handleTextChange}
          />
          <br />
          
          <label htmlFor="name">Last Name:</label>
           <input
          type="text"
          id="lastName"
          name="lastname"
          value={user.lastName}
          onChange={handleTextChange}
          />
          <br />
          
        <label htmlFor="name">Email:</label>
          <input
          type="email"
          id="email"
          name=" email"
         // placeholder='email'
          value={user.email}
          onChange={handleTextChange}
          />

        <label htmlFor="name">Zip Code:</label>
          <input
          type="number"
          id="zip"
          name="zip"
         // placeholder='enter a zip code'
          value={user.zip}
          onChange={handleTextChange}
          />
          <br />
      
          <button onClick={() => alert("You have adopted birds, thank you! ")}> Submit</button>
    
          </form>
         </div>
         
       );

 }