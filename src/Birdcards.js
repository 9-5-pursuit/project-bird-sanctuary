import React, { useState }from 'react';
import birdData from './data/birds';

function Birdcards ({birdArray}) {

    function handleClick(birdcardID) {
            birdArray.push(birdData.filter(bird => bird.id === birdcardID)[0]);
    }
        
    return (birdData.map(birdcard => {
                return (
                <div className='card'>
                <h3>{birdcard.name}</h3>
                <img src={birdcard.img} alt='Bird'/>
                <h4>{birdcard.amount}</h4>
                <button onClick={() => handleClick()}>Adopt</button>
                </div>
                );
    })
    );
}

export default Birdcards;
