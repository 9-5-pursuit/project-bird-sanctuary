import { v1 as generateUniqueID } from 'uuid'

export default function Cart({ birdCart, removeBird }) {
    return (<div className="Cart">
        <h2>Cart</h2>
        <br/>
        <h4>Discount: {birdCart.currentDiscountPercentage}%</h4>
        <h4>Total: ${birdCart.totalPrice * birdCart.currentDiscount}</h4>
        <ol>
            {birdCart.currentBirds ? birdCart.currentBirds.map((bird) => {
               return (
                <li key={generateUniqueID()}>
                    <p>{bird.name}: ${bird.amount}</p>
                    <button onClick={() => {removeBird(bird.id, bird.amount)}}>Delete</button>
                </li>
               ) 
            }) : null}
        </ol>
        <ul>
            <p>{birdCart.bonusItemsArray.length > 0 ? "Your donation has qualified you for the following items" : null}</p>
            {birdCart.bonusItemsArray.map((item) => {
                return (
                    <li key={generateUniqueID()}>{item}</li>
                )
            })}
        </ul>
    </div>)
}