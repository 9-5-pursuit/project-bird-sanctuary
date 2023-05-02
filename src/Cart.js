import React, { useState } from 'react';
import bonusItems from './data/bonusItems';

function Cart ({birdArray}) {

    let [cartCount, setCartCount] = useState("0");

  return (
    <div className='cart'>
    <h2>Cart</h2>
    <h3>Discount: {}</h3>
    <h4>Total: {}</h4>
    <ol>
        {birdArray.map(birdObj => {
            cartCount++;
            return (
                <li>{birdObj.name}: {birdObj.amount}</li>
            );
            })
        }
    </ol>
    <p>Your donations have qualified you for the following items:</p>
    <ul>
        {bonusItems.slice(0, cartCount-1).map(item => <li>{item}</li>
        )}
    </ul>
    </div>
  );
}

export default Cart;