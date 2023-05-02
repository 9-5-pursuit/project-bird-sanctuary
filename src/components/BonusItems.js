import { useState } from "react";
import bonusItems from "../data/bonusItems";

// The bonus items are added as list items in an <ul> list item as follows:
// 1 bonus (first array item) is given if the total is between 100 and 300
// 2 bonuses (first and second array items) are given if the total is between 300 and 500
// 3 bonuses are given if the total is between 500 and 1000
// 4 bonuses are given if the total is more than 1000

function BonusItems({
  adoptBird,
  total,
  showFirst,
  showSecond,
  showThird,
  showFourth,
}) {
  //   console.log(total);

  return (
    <>
      <ul>
        <li>{showFirst ? bonusItems[0] : ""}</li>
        <li>{showSecond ? bonusItems[1] : ""}</li>
        <li>{showThird ? bonusItems[2] : ""}</li>
        <li>{showFourth ? bonusItems[3] : ""}</li>
      </ul>
    </>
  );
}

export default BonusItems;
