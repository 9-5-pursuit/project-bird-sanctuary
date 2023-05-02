 import React from 'react'
 import { useState } from 'react';
 import { v1 as generateUniqueID } from "uuid";

function BirdCards( {img, amount,name,id,handleCart}) {
const [selectedBird,setselectedBird]=useState(
    {name:name,
    amount:amount,
    id:id,
    })

function handleAdopt(){
    setselectedBird({
        name:selectedBird.name,
        amount:selectedBird.amount,
        id:generateUniqueID()
    })
}

function handleSubmit(e){
    e.preventDefault();
    handleAdopt()
    handleCart(selectedBird) 
}
  return (
    
    <form onSubmit={handleSubmit}>
        <li className="card" key={id}>
            <h5>{name}</h5>
            <p>Price: ${amount}</p>
            <img src={img} alt={name}></img> <br/>
            <button type='submit'>ADOPT</button>
        </li>
    </form>         
  )
}
export default BirdCards
