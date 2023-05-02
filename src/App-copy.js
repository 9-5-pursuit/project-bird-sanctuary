import Cart from "./Cart";
import birdData from "./data/birds";
import BirdCard from "./data/birdCard";
import Checkout from "./Checkout";

console.log(birdData);
const newArr = { ...birdData };

console.log(newArr);

function App() {
  return (
    <div className="grid-container">
      <div className="aside">
        <Cart />
        <br />
        <Checkout />
      </div>
      <div>
        <BirdCard />
      </div>
    </div>
  );
}

export default App;
