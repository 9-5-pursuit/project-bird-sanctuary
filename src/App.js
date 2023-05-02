import { useState } from "react";
import BirdCards from "./Components/BirdCards";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";
import "./index";
function App() {
  const [adopted, setAdopted] = useState([]);

  function handleAdoptedBird(birdObj) {
    setAdopted([...adopted, birdObj]);
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  // console.log(adopted);

  return (
    <div className="App">
      <main>
        <Cart adopted={adopted} />
        <Checkout onSubmit={() => preventDefault()} />

        <ul>
          {birdData.map((birdEle) => {
            return (
              <BirdCards
                handleAdoptedBird={handleAdoptedBird}
                bird={birdEle}
                key={birdEle.id}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
