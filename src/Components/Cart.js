import bonusItems from "../data/bonusItems";

// Cart component
export default function Cart({cartItems, handleRemoveFromCart}){
    // 1. determine the discount 
    // 2. Calculate the total
    // 3.  determine which bonuses to show 
  
  
    // calculates the total of the array but adding to the passed total;
    const total = cartItems.reduce((accumulator, currentValue) => 
    accumulator += currentValue.amount, 0)
  
    let eligibleBonuses = []
  
    if (total >= 100 && total < 300) {
      eligibleBonuses = bonusItems.slice(0, 1);
    }
    if (total >= 300 && total < 500){
      eligibleBonuses = bonusItems.slice(0, 2) ;
     }
    if (total >= 500 && total <= 1000) {
      eligibleBonuses = bonusItems.slice(0, 3) ;
    }
    if (total > 1000) {
      eligibleBonuses = bonusItems};
      
  
    return(
      <div className='Cart'>
        <h2>Cart</h2>
        {/* shows the discount only of the length of the array in the cart is more than 3 */}
        <h3>Discount: {cartItems.length >= 3 ? 10: 0}%</h3>
        {/* shows total depending of the length of the cart  */}
        <h4>Total: ${cartItems.length >= 3 ? total * .9 : total}</h4>
        
        {/* list of adopted birds */}
        <ol>
          {cartItems.map((item, index) =>
          <li key={item.id * Math.random()}>
            {item.name}: ${item.amount}
            <button onClick={() => handleRemoveFromCart(index)}>X</button>
            </li>)}
        </ol>
        {/* list of bonuses */}
        {eligibleBonuses.length > 0 && (
          <>
          <p> Your donations have qualified you for the following items:</p>
          <ul>
            {eligibleBonuses.map((bonus)=> <il bonus={bonus}> {bonus}<br/> </il>)}
          </ul>
          </>
        )}
      </div>
    )
  }