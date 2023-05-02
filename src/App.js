import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Birds from './Components/Birds'

import birdData from './data/birds'
import bonusItems from './data/bonusItems'

import { useState } from 'react'

import "./App.css"

function App () {
  const [birdCart, setBirdCart] = useState({
    totalPrice: 0,
    totalBirds: 0,
    bonusItemsArray: [],
    currentDiscountPercentage: 0,
    currentDiscount: 1,
    currentBirds: [],
  })

  function handleBonusItems() {
    let discountedPrice = birdCart.totalPrice * birdCart.currentDiscount

    if (discountedPrice < 100) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: []
      })
    } else if (discountedPrice >= 100 && discountedPrice < 300) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0]]
      })
    } else if (discountedPrice >= 300 && discountedPrice < 500) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0], bonusItems[1]]
      })
    } else if (discountedPrice >= 500 && discountedPrice < 1000) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0], bonusItems[1], bonusItems[2]]
      })
    } else if (discountedPrice >= 1000) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]]
      })
    }
  }

  function handleDiscount() {
    if (birdCart.totalBirds >= 3) {
      setBirdCart(birdCart.currentDiscountPercentage = 10)
      setBirdCart(birdCart.currentDiscount = .9)
    } else {
      setBirdCart(birdCart.currentDiscountPercentage = 0)
      setBirdCart(birdCart.currentDiscount = 1)
    }
  }

  function adoptBird(bird) {
    setBirdCart(birdCart.totalPrice += bird.amount)
    setBirdCart(birdCart.totalBirds += 1)
    setBirdCart(birdCart.currentBirds.push(bird))
    
    handleDiscount()

    handleBonusItems()
  }

  function removeBird(birdID, birdPrice) {
    const filteredBirdArray = []

    let birdIndex = birdCart.currentBirds.findIndex(bird => bird.id === birdID)
    
    birdCart.currentBirds.forEach((bird, index) => {
      if (index !== birdIndex) {
        filteredBirdArray.push(bird)
      }
    })

    setBirdCart(birdCart.currentBirds = filteredBirdArray)
    setBirdCart(birdCart.totalBirds = birdCart.totalBirds - 1)
    setBirdCart(birdCart.totalPrice = birdCart.totalPrice - birdPrice)

    handleDiscount()

    handleBonusItems()
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert("You have adopted birds. Thank you!")
    handleReset()
    e.target.reset()
  }

  function handleReset() {
    setBirdCart({
      totalPrice: 0,
      totalBirds: 0,
      bonusItemsArray: [],
      currentDiscountPercentage: 0,
      currentDiscount: 1,
      currentBirds: [],
    })
  }

  return (
    <div className='main'>
      <h1>Bird Sanctuary</h1>
      <div>
        <Cart birdCart={birdCart} removeBird={removeBird}/>
      </div>

      <div>
        <Checkout handleSubmit={handleSubmit}/>
      </div>

      <div>
        <Birds birdData={birdData} adoptBird={adoptBird}/>
      </div>
    </div>
  );
};

export default App;
