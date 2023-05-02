import React from 'react'


function Birdcards({addBird,birds}) {

  return (
    <div className='bird-cards'>
        <section>
            <main>
                <ul>
                    {birds.map((bird) => {
                        return (
                            <li className='card' key={bird.id}>
                                <h2>{bird.name}</h2>
                                <p>{bird.amount}</p>
                                <img src={bird.img} alt='bird'/>
                                <br/>
                                <button onClick={() => addBird(bird.id)}>Adopt</button>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </section>
    </div>
  )
}

export default Birdcards