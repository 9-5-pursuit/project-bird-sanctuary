import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
import Birds from "./data/birds";
import BonusItems from "./data/bonusItems";
import BirdCollection from "./Components/BirdCollection";
import Checkout from "./Components/Checkout";
import CartComponent from "./Components/Cart";
import "./index.css";
import Modal from "./Components/ModalComponent";
function App() {
  const [birds, setBirds] = useState(Birds);
  const [bonus, setBonus] = useState(BonusItems);
  const [bonusCollection, setBonusCollection] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [hasSubmit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    //console.log("This is submission me");
    setSubmit(true);
    //const localCart = cart;
    resetAll();
  }
  function resetSubmit() {
    setSubmit(false);
  }
  function handleDiscount(localTotal) {
    // const localTotal = total;
    const localDiscount = discount / 100;
    const discountAmount = localTotal * localDiscount;
    const finalSum = localTotal - discountAmount;
    setTotal(finalSum);
  }
  function addToTotal(amount) {
    let localTotal = total + amount;

    setTotal(localTotal);
    handleDiscount(localTotal);

    addBonusItems(localTotal);
  }
  function itsFree(localTotal) {
    localTotal <= 0 && setTotal(0);
  }
  function resetAll() {
    setBonusCollection([]);
    setDiscount(0);
    setTotal(0);
    setCart([]);
    setTotal(0);
  }

  function subtractToTotal(item) {
    const localNum = item.amount;
    let localTotal = total - localNum;

    setTotal(localTotal);
    //console.log(cart.length);
    //handleDiscount(localTotal);
    itsFree(localTotal);
    addBonusItems(localTotal);
    //setBonusCollection([]);
    //checkDiscount();
  }

  function grabElementDetails(bird) {
    const newBird = {
      id: generateUniqueID(),
      name: bird.name,
      amount: bird.amount,
    };
    //console.log(bird);
    //console.log(newBird);
    updateCart(newBird);
    addToTotal(bird.amount);

    //checkBonusItems();

    //checkDiscount();
  }

  function updateCart(newBird) {
    const updatedCart = [...cart, newBird];
    setCart(updatedCart);

    //setCart([...cart],[newBird]); //concat seeems to take the first index if initial array is empty cart.concat()
    //console.log(updatedCart);
    updatedCart.length >= 3 ? setDiscount(10) : setDiscount(0);
    //console.log(cart);
    // console.log(cart.length + 1);
  }
  function addBonusItems(localTotal) {
    //const localTotal = total;
    let localBonuses = [];
    if (localTotal >= 100 && localTotal < 300) {
      //console.log("1 bonus item ");
      localBonuses.push(bonus[0]);

      setBonusCollection([...localBonuses, bonus[0]]);
    } else if (localTotal >= 300 && localTotal < 500) {
      //console.log("2 bonus items");
      // setBonusCollection([]);
      //console.log(bonusCollection);
      localBonuses.push(bonus[0], bonus[1]);
    } else if (localTotal >= 500 && localTotal < 1000) {
      //console.log("3 bonus items");
      // setBonusCollection([]);
      localBonuses.push(bonus[0], bonus[1], bonus[2]);
    } else if (localTotal > 1000) {
      //console.log("All the bonus items");
      localBonuses = bonus;
    }
    setBonusCollection(localBonuses);
  }

  return (
    <div className="App">
      <main>
        <>
          {hasSubmit ? (
            <Modal resetSubmit={resetSubmit} />
          ) : (
            <>
              <CartComponent
                discount={discount}
                total={total}
                cart={cart}
                subtractToTotal={subtractToTotal}
                bonusCollection={bonusCollection}
                setDiscount={setDiscount}
                setCart={setCart}
              />

              <Checkout cart={cart} handleSubmit={handleSubmit} />

              <BirdCollection
                birds={birds}
                grabElementDetails={grabElementDetails}
              />
            </>
          )}
        </>
      </main>
    </div>
  );
}

export default App;

{
  /* <div className="Cart container">
          <h4>Cart</h4>
          <p>Discount: {discount}%</p>
          <p>Total: ${total}</p>
          <ol>
            {cart.map((item) => {
              //console.log(item.amount);
              //console.log(cart.length);

              return (
                <li key={item.id}>
                  {item.name} ${item.amount}
                  <button
                    onClick={() => {
                      subtractToTotal(item);
                      setCart(cart.filter((element) => element.id !== item.id));
                      cart.length - 1 >= 3 ? setDiscount(10) : setDiscount(0);
                    }}
                  >
                    &times;
                  </button>
                </li>
              );
            })}
          </ol>
          <p>Your Donations have qualified you for the following items:</p>
          <ul>
            {bonusCollection.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <Checkout cart={cart} 
        hasSubmit={hasSubmit}
        resetSubmit={resetSubmit}
        handleSubmit={handleSubmit}
        />

        <BirdCollection birds={birds} grabElementDetails={grabElementDetails} /> */
}
