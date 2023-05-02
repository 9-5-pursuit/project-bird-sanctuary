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

function handleAdopt(e) {
  const birdsArray = [...birds];
  const adoptedBird = birdsArray.findIndex((bird) => bird.id === e.target.id);
 
  // setbirds(adoptedBird)
  console.log(adoptedBird)
}



function handleDiscount() {

}

 
  return (
    <div>
    <Birdcards
    birds={birds} 
    handleAdopt={handleAdopt}/> 
    <Checkout 
    user={user}
    handleSubmit={handleSubmit}
    handleTextChange={handleTextChange}
    handleAdopt
    />
    <Cart
    birds={birds}
    cart={cart}
    handleAdopt={handleAdopt}
    />
    </div>
  );
};

export default App;
