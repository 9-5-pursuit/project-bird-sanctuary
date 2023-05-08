import React from "react";
import bonusItems from "../data/bonusItems";

function BonusItems({
  totalAmount,
  firstTier,
  secondTier,
  thirdTier,
  fourthTier,
}) {
  //   const [firstTier, setFirstTier] = useState(false);
  //   const [secondTier, setSecondTier] = useState(false);
  //   const [thirdTier, setThirdTier] = useState(false);
  //   const [fourthTier, setFourthTier] = useState(false);

  //   function getBonus() {
  //     if (totalAmount >= 100 && totalAmount > 300) {
  //       console.log("Dun");
  //       setFirstTier(true);
  //     }
  //     if (totalAmount >= 300 && totalAmount > 500) {
  //         console.log("Dun,Dun");
  //       setSecondTier(true);
  //     }
  //     if (totalAmount >= 500 && totalAmount > 1000) {
  //       setThirdTier(true);
  //     console.log("Dun,Dun,Dun");
  //     }
  //     if (totalAmount >= 1000) {
  //         console.log("VOILA!!");
  //       setFourthTier(true);
  //     }
  //   }

  return (
    <>
      <ul>
        <li>{firstTier ? bonusItems[0] : ""}</li>
        <li>{secondTier ? bonusItems[1] : ""}</li>
        <li>{thirdTier ? bonusItems[2] : ""}</li>
        <li>{fourthTier ? bonusItems[3] : ""}</li>
      </ul>
    </>
  );
}

export default BonusItems;
