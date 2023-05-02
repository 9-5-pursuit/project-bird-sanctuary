import React, { useState } from 'react';
import Birdcards from './Birdcards';
import Cart from './Cart';
import Checkout from './Checkout';

function App () {

  let [birdArray, setBirdArray] = useState([]);

  return (
    <div>
      <section>
      <Birdcards birdArray={birdArray} />
      </section>
      <section>
      <Cart birdArray={birdArray}/>
      </section>
      <section>
      <Checkout />
      </section>
    </div>
  );
};

export default App;
