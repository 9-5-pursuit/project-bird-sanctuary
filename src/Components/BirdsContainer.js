import BirdCard from "./BirdCard";
import birdData from "../data/birds";

export default function BirdsContainer({ handleAddToCart }) {
  
  return (
    <div className="birds bird-card-container">
      {birdData.map((bird) => (
        <BirdCard key={bird.id} bird={bird} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}
