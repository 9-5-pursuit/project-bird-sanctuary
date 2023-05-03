import React, { useState } from 'react';
import birdData from './data/birds';
import bonusItems from './data/bonusItems'


import "./App.css"


// Function Components

function Cart({ cartItems, deleteItem, bonusItems }){

let total = cartItems.reduce((accumulator, currentValue) => accumulator+= currentValue.amount, 0)

let array = [];

if (total >= 100 && total < 300) {
  array = bonusItems.slice(0, 1);
}

if (total >= 300 && total < 500) {
  array = bonusItems.slice(0, 2);
}

if (total >= 500 && total <= 1000) {
  array = bonusItems.slice(0, 3);
}

if (total > 1000) {
  array = bonusItems;
}




  return(
    <div className="Cart">
      <h2>Cart</h2>
      <h3>Total: ${cartItems.length >= 3 ? total * 0.9: total}</h3>
      <h4>Discount: {cartItems.length >= 3 ? 10: 0}%</h4>
      {/* List of cart items */}
      <ol>{
        cartItems.map((item) => {
          return(
            <li key={item.id}>
              {item.name} - ${item.amount} <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          )
        })
        }</ol>
      {/* List of eligible bonuses */}
      {
        array.length > 0 ? (
        <>
        <p>Your donations have qualified you for the following items: </p>
        <ul>
          {array.map((item) => {
            return(
              <li>{item}</li>
            )
          })}
        </ul>
        </>
        ) : (null)
      }  
    </div>
  )
}

function Checkout({ setCartItems }){

const [user, setUser] = useState({
  firstName: "",
  lastName: "",
  email: "",
  zip: ""
})

function handleTextChange(event){
  setUser({
    ...user,
    [event.target.id]: event.target.value
  })
}

function handleSubmit(){
  alert("You have adopted birds. Thank You!");

  setUser({
    firstName: "",
    lastName: "",
    email: "",
    zip: ""
  })

  setCartItems([]);
}



  return(
    <div className='Checkout'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input type="text" id="firstName" value={user.firstName} onChange={handleTextChange} required />

        <label htmlFor='lastName'>Last Name</label>
        <input type="text" id="lastName" value={user.lastName} onChange={handleTextChange} required />

        <label htmlFor='email'>Email</label>
        <input type="email" id="email" value={user.email} onChange={handleTextChange} required />

        <label htmlFor='zip'>Zip</label>
        <input type="text" id="zip" value={user.zip} onChange={handleTextChange} required />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

function Birds({ AddtoCart }){
return(
  <div className='bird-card-container'>{
    birdData.map((bird) => {
      return(
        <BirdsCard key={bird.id} bird={bird} AddtoCart={ AddtoCart }/>
      )
    })
    }</div>
  )
}

function BirdsCard({ bird, AddtoCart }){
  return(
    <div className="card bird-card">
    <h2>{bird.name}</h2>
    <p>Price: {bird.amount}</p>
    <img src={bird.img} alt='Bird'/>
    <button onClick={() => AddtoCart(bird)}>Adopt</button>
    </div>
  )
}





function App () {
  const [cartItems, setCartItems] = useState([]);

  function AddtoCart(bird){
    setCartItems([bird, ...cartItems])
  }

  function deleteItem(birdID){
    let cartCopy = [...cartItems];
    
    let filteredCartCopy = cartCopy.filter((item) => item.id !== birdID);

    setCartItems(filteredCartCopy);
  }
  
  return (
    <div>
      <aside>
        <Cart cartItems={ cartItems } deleteItem={ deleteItem } bonusItems={ bonusItems }/>
        <Checkout setCartItems={ setCartItems }/>
      </aside>
      <main>
        <Birds AddtoCart={AddtoCart}/>
      </main>
    </div>
  );
};

export default App;
