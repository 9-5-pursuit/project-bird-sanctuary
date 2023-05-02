import React, {useState} from "react"
import Birdcards from "./Birdcards";
import Checkout from "./Checkout";
import birdData from "./data/birds";
import Cart from "./Cart";



function App () {

  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
})

const [birds, setbirds] = useState(birdData)

const [cart, setcart] = useState([])

function handleSubmit(e) {
    e.preventDefault()
    handleReset()
}

function handleTextChange(e) {
    setuser({
        ...user,
        [e.target.id]: e.target.value
    })
}

function handleReset() {
    setuser({
        firstName: "",
        lastName: "",
        zip: "",
        email: "",  
    })
}

function addBird(birdID) {
  const filteredBirds = birds.filter((bird) => bird.id === birdID)
  .map(bird => bird.name)
console.log(filteredBirds)

}
 
  return (
    <div>
    <Birdcards
    birds={birds} 
    addBird={addBird}
    /> 
    <Checkout 
    user={user}
    handleSubmit={handleSubmit}
    handleTextChange={handleTextChange}
   
    />
    <Cart
    birds={birds}
    cart={cart}
    
    />
    </div>
  );
};

export default App;
