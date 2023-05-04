import React, { useState } from 'react'
import BirdsContainer from './Components/BirdsContainer'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'



function App() {
  const [cartItems, setCartItems] = useState([])

  function handleAddToCart(bird){
    setCartItems([...cartItems, bird])
  }

  function handleRemoveFromCart(index){
    // make a copy 
    const updatedCartItems = [...cartItems]
    // update copy 
    updatedCartItems.splice(index, 1)

    setCartItems(updatedCartItems)

  }

  function reset(){
    setCartItems([])
  }


  return (
    <div className='container'>
      <aside>
        {/* cart */}
        <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>
        {/* checkout */}
        <Checkout reset={reset} />
      </aside>
      <main> 
        {/* bird container */}
        <BirdsContainer  handleAddToCart={handleAddToCart}/>
      </main>
    </div>
  )
}

export default App