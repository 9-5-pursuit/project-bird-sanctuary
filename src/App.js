

import React from "react";
import "./App.css";
 import { useState } from "react"
import birdData  from "./data/birds"
import BirdCard from "./Components/BirdCard";
import CheckOutForm from "./Components/CheckOutForm";
import Cart from "./Components/Cart";


function App() {

   const [newBirds, setnewBirds] = useState(birdData);
  
   

   function handleAddBird(bird) {
     setnewBirds([bird, ...newBirds]);

      {
        birdData.map(({ name, amount, id }) => {
          return (
            <div className="total">
              <h4>Total $ {amount}</h4>

              <ol>
                <li key={id}>{name}</li>
              </ol>
            </div>
          );
        });
      }


   }

   function removeBird(birdID) {
     const filteredBirdArray = newBirds.filter((bird) => bird.id === birdID);
     setnewBirds(filteredBirdArray);
   }

  
  return (
    <div className="App">
      <header>
        <h1>Bird Sanctuary Donation App</h1>
      </header>

      <aside>
        <BirdCard handleAddBird={handleAddBird} />
        <br />
        <Cart newBirds={newBirds} removeBird={removeBird} /> <br />
        <CheckOutForm />
      </aside>
    </div>
  );
};

export default App;
