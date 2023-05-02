import React from 'react';
import data from './data/birds.js';

function Birdcards() {

    let birdArray = [];

    function handleClick() {
        for (let birdObj of data) {
            birdArray.push[birdObj.id];
        }
    }

    for (let i = 0; i < data.length; i++) {
        return (
            <>
            <h3>{data[i].name}</h3>
            <img src={data[i].img} />
            <h4>{data[i].amount}</h4>
            <button onClick={() => handleClick()}>Adopt</button>
            </>
        );
    }
}

export default Birdcards;