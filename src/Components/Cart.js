export default function Cart({ birdCart, removeBird }) {
    return (<>
        <h2>Cart</h2>
        <br/>
        <h4>Discount: {birdCart.currentDiscountPercentage}%</h4>
        <h4>Total: ${birdCart.totalPrice * birdCart.currentDiscount}</h4>
        <ol>
            {birdCart.currentBirds.map((bird) => {
               return (
                <li key={bird.id}>
                    <p>{bird.name}: ${bird.amount}</p>
                    <button onClick={() => {removeBird(bird.id, bird.amount)}}>Delete</button>
                </li>
               ) 
            })}
        </ol>
        <ul></ul>
    </>)
}