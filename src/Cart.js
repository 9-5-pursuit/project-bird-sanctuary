import React, { useState } from 'react';
import bonusItems from './data/bonusItems';

function Cart ({birdArray}) {
    let [cartTotal, setCartTotal] = useState([]);

    function handleCartTotal() {
        const tenPercentDiscount = .90;
        if ((birdArray.length >= cartTotal.length) && cartTotal.length < 3) {
            birdArray.map(birdObj => setCartTotal(cartTotal.push(birdObj.amount)))
            return (
            cartTotal.reduce((accumulator, currentAmount) => accumulator + currentAmount, 0)
            ).toFixed(2);
        } else {
            birdArray.map(birdObj => setCartTotal(cartTotal.push(birdObj.amount)));
            return (
            cartTotal.reduce((accumulator, currentAmount) => accumulator + currentAmount, 0) * tenPercentDiscount
            ).toFixed(2);
        }
    }

  return (
    <div className='cart'>
    <h2>Cart</h2>
    <h3>Discount: {cartTotal.length >= 3 ? "10%": "0%"}</h3>
    <h4>Total: {handleCartTotal()}</h4>
    <ol>
        {birdArray.map(birdObj => {
            return (
                <>
                <li>{birdObj.name}: {birdObj.amount}</li>
                <button className='birds'>Delete</button>
                </>
            );
            })
        }
    </ol>
    <p>Your donations have qualified you for the following items:</p>
    <ul>
        {bonusItems.slice(0, cartTotal.length).map(item => <li>{item}</li>
        )}
    </ul>
    </div>
  );
}

export default Cart;