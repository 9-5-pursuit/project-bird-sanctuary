import BirdCard from "./BirdCards";
import birdData from "../data/birds";

const BirdSection = () => {
  const listItems = birdData.map((bird) => {
    return (
      <BirdCard
        key={bird.id}
        img={bird.img}
        name={bird.name}
        amount={bird.amount}
        id={bird.id}
      />
    );
  });
  return (
    <div className="grid">
      <div>{listItems}</div>
    </div>
  );
};

export default BirdSection;
