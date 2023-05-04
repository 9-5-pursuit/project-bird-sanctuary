//bird card
export default function BirdCard({bird, handleAddToCart}){
    return(
      <div className='card'>
        <h2>{bird.name}</h2>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={""}/>
        <button onClick={()=>handleAddToCart(bird)}>Adpot</button>
      </div>
    )
  }