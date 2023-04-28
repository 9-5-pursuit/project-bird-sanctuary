import BirdCards from './Components/birdcards';
import Cart from './Components/cart';
import Checkout from './Components/checkout';
import birdData from './data/birds';
import { useState } from 'react';
function App() {
  const [adopt, setAdopt] = useState([]);

  function handleCart(args) {
    if (args>=0) setAdopt([...adopt].filter((item, index) => index !== args))
    else setAdopt([])
  }

  function handleBird(args) {
    setAdopt([...adopt, args])
  }

  return (
    <div className="App">
      <main>
        <aside>
          <Cart adopt={adopt} handleCart={handleCart}/>
          <Checkout handleCart={handleCart}/>
        </aside>
        <div className="birds">
          <ul>
            {birdData.map((item) => {

              return (
                <BirdCards birds={item} handleBird={handleBird} />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
