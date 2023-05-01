import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Birds from './Components/Birds'

import birdData from './data/birds'
import bonusItems from './data/bonusItems'

import { useState } from 'react'

function App () {
  const [birdCart, setBirdCart] = useState({
    totalPrice: 0,
    totalBirds: 0,
    bonusItemsArray: [],
    currentDiscountPercentage: 0,
    currentDiscount: 1,
    currentBirds: [],
  })

  function adoptBird(bird) {
    console.log(birdCart)

    // setBirdCart({
    //   ...birdCart,
    //   totalPrice: (),
    //   totalBirds: (birdCart.totalBirds += 1),
    //   currentBirds: [...birdCart.currentBirds, bird]
    // })

    setBirdCart(birdCart.totalPrice += bird.amount)
    setBirdCart(birdCart.totalBirds += 1)
    setBirdCart(birdCart.currentBirds.push(bird))

    if (birdCart.totalBirds >= 3) {
      // setBirdCart({
      //   ...birdCart,
      //   currentDiscountPercentage: 10,
      //   currentDiscount: .9,
      // })

      setBirdCart(birdCart.currentDiscountPercentage = 10)
      setBirdCart(birdCart.currentDiscount = .9)
    }

    if (birdCart.totalPrice >= 100 && birdCart.totalPrice < 300) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0]]
      })
    } else if (birdCart.totalPrice >= 300 && birdCart.totalPrice < 500) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0], bonusItems[1]]
      })
    } else if (birdCart.totalPrice >= 500 && birdCart.totalPrice < 1000) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0], bonusItems[1], bonusItems[2]]
      })
    } else if (birdCart.totalPrice >= 1000) {
      setBirdCart({
        ...birdCart,
        bonusItemsArray: [bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]]
      })
    }
  }

  function removeBird(birdID, birdPrice) {
    const filteredBirdArray = birdCart.currentBirds.filter((bird) => bird.id !== birdID);
    setBirdCart({
      ...birdCart,
      currentBirds: filteredBirdArray,
      totalBirds: birdCart.totalBirds--,
      totalPrice: birdCart.totalPrice -= birdPrice
    });
  }

  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <div>
        <Cart bonusItems={bonusItems} birdCart={birdCart} removeBird={removeBird}/>
      </div>

      <div>
        <Checkout />
      </div>

      <div>
        <Birds birdData={birdData} adoptBird={adoptBird}/>
      </div>
    </div>
  );
};

export default App;
