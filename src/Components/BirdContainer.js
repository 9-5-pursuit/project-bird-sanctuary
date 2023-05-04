// import BirdCard from "./BirdCards";
// import birdData from "../data/birds";

// const BirdSection = () => {
//   const listItems = birdData.map((bird) => {
//     return (
//       <BirdCard
//         key={bird.id}
//         img={bird.img}
//         name={bird.name}
//         amount={bird.amount}
//         id={bird.id}
//       />
//     );
//   });
//   return (
//     <div className="grid">
//       <div>{listItems}</div>
//     </div>
//   );
// };

// export default BirdSection;

import BirdCard from "./BirdCard";
import birdData from "../data/birds";

// BirdsContainer Component
export default function BirdsContainer({ handleAddToCart }) {
  // 1. We need the list of birds to display
  return (
    <div className="birds bird-card-container">
      {birdData.map((bird) => (
        <BirdCard key={bird.id} bird={bird} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}
