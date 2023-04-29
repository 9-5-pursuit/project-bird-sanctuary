export default function Cart({ birdCart }) {
    return (<>
        <h2>Cart</h2>
        <br/>
        <h4>Discount: {birdCart.currentDiscountPercentage}%</h4>
        <h4>Total: ${birdCart.totalPrice}</h4>
        <ol></ol>
        <ul></ul>
    </>)
}