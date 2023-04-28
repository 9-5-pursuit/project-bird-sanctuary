import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import { useState } from "react";
// import { v1 as generateUniqueID } from "uuid";

function App() {
  const [adoptBirds, setAdoptBirds] = useState([]);

  function handleBirdAdopt(newBird) {
    setAdoptBirds([...adoptBirds, newBird]);
    // console.log(adoptBirds);
  }

  function handleRemoveBird(indexOfBird) {
    setAdoptBirds(
      adoptBirds.filter((ele, i) => {
        return indexOfBird !== i;
      })
    );
  }

  return (
    <div className="App">
      <main>
        {/* <p>{JSON.stringify(adoptBirds)}</p>  */}
        <div>
          <Cart adoptBirds={adoptBirds} handleRemoveBird={handleRemoveBird} />
        </div>
        <div>
          <Checkout setAdoptBirds={setAdoptBirds} />
        </div>

        <div className="birds">
          <ul>
            {birdData.map((birdElement) => {
              return (
                <BirdCards
                  key={birdElement.id}
                  bird={birdElement}
                  handleBirdAdopt={handleBirdAdopt}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
