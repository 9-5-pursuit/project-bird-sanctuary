import { useEffect, useState } from "react";
import bonusItems from "../data/bonusItems";

const Bonus = ({ total }) => {
  const [bonus, setBonus] = useState([]);

  useEffect(() => {
    const numBonusItems =
      total < 100
        ? 0
        : total < 300
        ? 1
        : total < 500
        ? 2
        : total < 1000
        ? 3
        : 4;
    setBonus(bonusItems.slice(0, numBonusItems));
  }, [total]);

  return (
    <>
      {bonus.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </>
  );
};

export default Bonus;
