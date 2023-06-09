// import bonusItems from "../data/bonusItems";

// import bonusItems from "../data/bonusItems";

// Cart Component
// export default function Cart({ cartItems, handleRemoveFromCart }) {
// 1. determine the discount
// 2. calculate the total
// 3. determine which bonuses to show

//   const total = cartItems.reduce(
//     (accumulator, currentValue) => (accumulator += currentValue.amount),
//     0
//   );

//   let eligibleBonuses = [];

//   if (total >= 100 && total < 300) {
//     eligibleBonuses = bonusItems.slice(0, 1);
//   }

//   if (total >= 300 && total < 500) {
//     eligibleBonuses = bonusItems.slice(0, 2);
//   }

//   if (total >= 500 && total <= 1000) {
//     eligibleBonuses = bonusItems.slice(0, 3);
//   }

//   if (total > 1000) {
//     eligibleBonuses = bonusItems;
//   }

//   return (
//     <div className="Cart">
//       <h2>Cart</h2>
//       <h3>Discount: {cartItems.length >= 3 ? 10 : 0}%</h3>
//       <h4>Total: ${cartItems.length >= 3 ? total * 0.9 : total}</h4>
//       {/* List of Adopted Birds */}
//       <ol>
//         {cartItems.map((item, index) => (
//           <li key={item.id * Math.random()}>
//             {item.name}: ${item.amount}{" "}
//             <button onClick={() => handleRemoveFromCart(index)}>x</button>
//           </li>
//         ))}
//       </ol>
//       {/* List of Eligible Bonuses */}
//       {eligibleBonuses.length > 0 && (
//         <>
//           <p>Your donations have qualified you for the following items:</p>
//           <ul>
//             {eligibleBonuses.map((bonus) => (
//               <li key={bonus}>{bonus}</li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// }
import React from "react";
import bonusItems from "../data/bonusItems";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, bird) => acc + bird.amount, 0);

  function handleBirdRemoval(birdID) {
    const filteredBirdArr = cart.filter((bird) => bird.id !== birdID);
    setCart(filteredBirdArr);
  }
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cart.length >= 3 ? total * 0.9 : total}</h4>
      <p>Discount: ${cart.length >= 3 ? 10 : 0}%</p>
      <ol>
        {cart.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button
                onClick={() => {
                  handleBirdRemoval(bird.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul>
    </div>
  );
};

export default Cart;
