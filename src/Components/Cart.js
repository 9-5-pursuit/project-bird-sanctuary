import React from "react";
import bonusItems from "../data/bonusItems";
import { useState } from "react";

export default function Cart({ adoptBirds, handleRemoveBird }) {
  let totalprice = 0;
  adoptBirds.forEach((bird) => {
    totalprice += bird.amount;
  });
  //   console.log(totalprice);

  let bonus = [];
  if (totalprice >= 100 && totalprice < 300) bonus = bonusItems.slice(0, 1);
  if (totalprice >= 300 && totalprice < 500) bonus = bonusItems.slice(0, 2);
  if (totalprice >= 500 && totalprice < 1000) bonus = bonusItems.slice(0, 3);
  if (totalprice >= 1000) bonus = bonusItems.slice();
  //   console.log(bonus);

  return <h3>hello</h3>;
}
