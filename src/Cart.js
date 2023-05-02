import React from 'react'


function Cart({
    addBird,
    birds,
    cart
}) {
    

  return (
    <div className='cart'>
        <h2>Cart</h2>
        <p>Discount</p>
        <h4>Total</h4>
        <ol>
         <li>{cart}</li>
        </ol>
    </div>
  )
}

export default Cart