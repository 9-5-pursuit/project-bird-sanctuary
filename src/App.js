import BirdCards from './Components/birdcards';
import Cart from './Components/cart';
import Checkout from './Components/checkout';
import birdData from './data/birds';
import { useState } from 'react';
import { v1 as generateUniqueID } from 'uuid'
function App() {
  const [adopt, setAdopt] = useState([]);

  function handleBird(args) {

    setAdopt([...adopt, args].sort((a, b) => b.amount - a.amount))
  }

  return (
    <div className="App">
      <main>
        <aside>
          <Cart adopt={adopt} />
          <Checkout />
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
