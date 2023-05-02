import React from 'react'
import {useState} from 'react';


export default function BirdDetails({bird, addToCart}) {
   
    
      
  
    return (
    <div>
         <h2>{bird.name}</h2>
         <p>${bird.amount}</p>
        <img src={bird.img} alt={bird.name}/>
        <div>
        <button onClick={()=> addToCart(bird)}>Adopt</button>
        </div>

    </div>
  )
}
