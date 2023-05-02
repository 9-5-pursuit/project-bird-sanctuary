import React from "react";
import { useState } from "react";
import birdData from './data/birds'
// import Cart from './Cart';
// import Checkout from 'Checkout'

function App () {
  //gets info from data array. set as defult
  const [birds, setBirds] = useState(birdData);
  //list of birds added to cart
  const [birdCart, setBirdCart]= useState([])
  //keeps track of form filled
  const [userInfo, setUserInfo]= useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });
  //for pop up state
  const [popUp, setPopUp] = useState(false);
  const [newBird, setNewBird] = useState()



  
// add bird to cart
  function AddBirdToCart( bird) {
    setNewBird(bird)
    setBirdCart([...birdCart, newBird ])
    return(
      <>
      {birdCart.map((birds) => {
        return(
          <>
          {/* <li key={birds.id}>{birds.name}: ${birds.amount}</li> */}
          <li>1</li>

          </>
        )
        
        })}
      </>
          //   <ul>
          //   {birds.map((bird) => {
          //    return (
          //    <>
          //    <li key={bird.id}>
          //      <h3>{bird.name}</h3>
          //      <span>Price ${bird.amount}</span>
          //      <img src={bird.img} alt={bird.name} />
          //      <button className="AdpotButton" onClick={AddBirdToCart} value={bird.name}>Adopt</button>
          //    </li>
          //      </>
          //    );
          //   })}
          //  </ul>
      
    )
    // console.log(event.target.value);
  }
// resets the form
  function resetForm() {
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
    });
    // handlePopUp();
  }
  function handleTextChange(event){
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value
    })
  }
//stops the form default and has reset in it
  function handleSubmit(event){
    event.preventDefault();
    resetForm();
    ShowPopUp();
  }
  function ShowPopUp(){
    const togglePopUp = () => {
      setPopUp(!popUp)
    }
    return (
      <>
      {popUp ? (
        <div>
         <div>
          <p>You have adopted birds. Thank you!</p>
          </div>
        <button onClick={togglePopUp}>CLose</button>  
      </div>): null}
      </>
    )

    }
    // return(
    //   <>
    //   <div>
    //     <p>"You have adpoted birds. Thank you!</p>
    //   </div>
    //   <button >CLose</button>  
    //   </>
      
     
    // )
    // console.log("pop up!!!!");
    //message pop up saying "You have adpoted birds. Thank you!"
  // }
   
  // }
  // function addBirdToCart(bird) {
  //   setBirdCart([...birdCart, bird])
  //   const ol = document.querySelector("ol")
  //   console.log(birdCart);
  //   // return(
  //   //   ol.append(<li>{cartList.}</li>)
  //   // )  
  // }



  // function addBirdToCart(bird){
  //   //add bird under ol thorught down quaryslect
  //   return (
  //     setBirdCart((birdCart) => [
  //       ...bird,
  //       { ...} // <-- initial amount 1
  //     ])
  //     // <>
      //   {birdCart.map((listItem) => {
      //     return(
      //     <li key={listItem.id}>{listItem.name}</li>
      //   )}
  //     //   )}
  //     // </>
  //     )
  // }

  return (
    <div>
      <aside>
        <section className="cart"> 
        <h2>Cart</h2>
        <h5>Discount:{}%</h5>
        <h5>Total:{}%</h5>
        <ol>
        <AddBirdToCart/>
        </ol>
        </section>
        <section className="checkout">
          <ShowPopUp/>
          <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                onChange={handleTextChange}
                value={userInfo.firstName}
              />
          <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                onChange={handleTextChange}
                value={userInfo.lastName}
              />
          <label htmlFor="name">Email:</label>
              <input
                type="text"
                id="email"
                onChange={handleTextChange}
                value={userInfo.email}
              />
          <label htmlFor="zipCode">Zip Code:</label>
              <input
                type="text"
                id="zipCode"
                onChange={handleTextChange}
                value={userInfo.zipCode}
              />
              <input type="submit" />
          </form>
        </section>
      </aside>
      <div className="birdDisplay">
      <ul>
       {birds.map((bird) => {
        return (
        <>
        <li key={bird.id}>
          <h3>{bird.name}</h3>
          <span>Price ${bird.amount}</span>
          <img src={bird.img} alt={bird.name} />
          <button className="AdpotButton" onClick={AddBirdToCart} value={bird.name}>Adopt</button>
        </li>
          </>
        );
       })}
      </ul>
      </div>
    </div>
  );
};

export default App;




