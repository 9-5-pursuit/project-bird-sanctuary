import BirdCard from './Birdcard'
import birdData from '../data/birds'
// BirdsContainer component

//1. display bird data
export default function BirdsContainer({ handleAddToCart}){
  return (
    <div className='birds'>
      {birdData.map((bird) => 
      <BirdCard key={bird.id} bird={bird} handleAddToCart={handleAddToCart}/>
      )}
    </div>
  );
}