import { useState } from "react";
import BonusItems from "./BonusItems";
function Cart({
  info,
  adoptBird,
  total,
  discount,
  showFirst,
  showSecond,
  showThird,
  showFourth,
  newBirdArr,
  setAdoptBird,
}) {
  //   console.log(adoptBird);
  //   console.log(discount);
  //   now that it is an array we can iterate through it and m,,
  //   console.log(info); the array
  //   console.log(birds);

  //   discount();

  //   function updateDogAttendance(dogId) {
  //     const dogArray = [...dogs];
  //     const index = dogArray.findIndex((dog) => dogId === dog.id);
  //     dogArray[index].present = !dogArray[index].present;
  //     setDogs(dogArray);
  //   }

  function remove(adoptBird) {
    let sliced = adoptBird.slice(2);

    const removeBird = adoptBird
      .slice(2)
      .filter((bird, index) => bird === adoptBird.slice(2)[index]);
    setAdoptBird(removeBird);
  }

  return (
    <>
      <p>Discount: {discount}%</p>
      {/* <p>{discounted}</p> */}
      <h4>Total: ${total}</h4>
      <p></p>
      <ol>
        {adoptBird.slice(2).map(({ name, amount }, index) => (
          <li key={index} className="cart">
            {name}:{amount}
            <button onClick={() => remove(adoptBird)}>Remove</button>
          </li>
        ))}
      </ol>
      <p>your donations has qualified you for the following items</p>
      <BonusItems
        adoptBird={adoptBird}
        total={total}
        showFirst={showFirst}
        showSecond={showSecond}
        showThird={showThird}
        showFourth={showFourth}
      />
    </>
  );
}

export default Cart;
