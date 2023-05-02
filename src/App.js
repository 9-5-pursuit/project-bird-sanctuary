import { useState } from "react";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";

import "./App.css";
function App () {
  const [selectedBirdArray, setselectedBirdArray] = useState([])

  function handleCart(bird){
    setselectedBirdArray([...selectedBirdArray,bird])
  }

  function resetCart(){
    setselectedBirdArray([])
  }

  function removeBird(birdID){
    let filteredBirdCart =  selectedBirdArray.filter(bird => bird.id !== birdID)
    setselectedBirdArray(filteredBirdCart)
  }

  return (
    <>
    
      <h2>Bird Sanctuary</h2>
      <div className="birds">
        {birdData.map(bird => {
          return(
            <BirdCards key={bird.id} handleCart={handleCart} id={bird.id} name={bird.name} amount={bird.amount} img={bird.img}/>
          )
        })}
      </div>
      <Cart selectedBirdArray={selectedBirdArray} removeBird={removeBird}/>
      <Checkout resetCart={resetCart}/>
    </>
    
  );
};

export default App;
