import React, {useState} from 'react'
import birdData from './data/birds'

function Birdcards() {
    const [birds, setbirds] = useState(birdData)
  return (
    <div className='bird-cards'>
        <section>
            <main>
                <ul>
                    {birds.map((bird) => {
                        return (
                            <li key={bird.id}>
                                <h2>{bird.name}</h2>
                                <p>{bird.amount}</p>
                                <img src={bird.img} alt='bird'/>
                                <br/>
                                <button onClick={() => false}>Adopt</button>
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