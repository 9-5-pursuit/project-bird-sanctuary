import React, { useState } from 'react';
import Birdcards from 'Birdcards';
import Cart from 'Cart';
import Checkout from 'Checkout';

function App () {
  return (
    <div>
      <section>
      <Birdcards />
      </section>
      <section>
      <Cart />
      </section>
      <section>
      <Checkout />
      </section>
    </div>
  );
};

export default App;
