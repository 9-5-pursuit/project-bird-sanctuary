

import React, {useState} from "react";
import "./App.css";
 import { birdData } from "./data/birds";
import CheckOutForm from "./Compnents/CheckOutForm";


function App() {



  //  console.log(birds);
  return (
    <div className="App">
      <header>
        <h1>Bird Sanctuary Donation App</h1>
      </header>
      <main>
        <aside>
          <CheckOutForm />
        </aside>
      </main>
    </div>
  );
};

export default App;
