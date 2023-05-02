import React from 'react'

export default function BirdCards({ birds, handleBird }) {

  return (
    <>
      <h3>
        {birds.name}
      </h3>
      <h5>
        Price: ${birds.amount}
      </h5>
      <img src={birds.img} alt={birds.name} />
      <br />
      <button onClick={() => handleBird(birds)}>ADOPT</button>
    </>
  )
}