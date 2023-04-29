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
    bonusItems: [],
    currentDiscountPercentage: 0,
    currentDiscount: 0,
    currentBirds: [],
  })

  return (
    <div>
      <div>
        <Cart bonusItems={bonusItems} birdCart={birdCart}/>
      </div>

      <div>
        <Checkout />
      </div>

      <div>
        <Birds birdData={birdData}/>
      </div>
    </div>
  );
};

export default App;
