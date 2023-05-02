import React from 'react'
import bonusItems from '../data/bonusItems';
function Cart({selectedBirdArray,removeBird}) {

function cartTotal(array){
   let total;
   let discount;

   total = array.reduce((accumulator,currentValue) => accumulator + currentValue.amount,0);
   
   if(array.length >= 3){
    discount = 0.1;
    total = total - (discount*total);
   }
   return total;
}

function discountPercentage(array){
    let discount;
    (array.length < 3) ? discount=0 : discount=10;
    return discount;
}

  return (
    <div className='Cart'>
        <h4>Cart</h4>
        <h5>Discount: {discountPercentage(selectedBirdArray)}%</h5>
        <h4>Total: ${cartTotal(selectedBirdArray)}</h4>
        <ol>
            {selectedBirdArray.map(bird => {
                return(
                    <li key={bird.id}> {bird.name} - ${bird.amount}
                        <button className='remove' onClick={() => {removeBird(bird.id)}}>remove</button>
                    </li>
                )
            })}
        </ol>
        <ul className='bonuses'>
            <h4>Bonuses</h4>
            {(cartTotal(selectedBirdArray)) >= 1000 ?
            (   <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                    <li>{bonusItems[2]}</li>
                    <li>{bonusItems[3]}</li>
                </>
            ) :null}

            {(cartTotal(selectedBirdArray)>=100 && cartTotal(selectedBirdArray)<300)  ?
            (   <>
                    <li>{bonusItems[0]}</li>
                </>
            ) :null}    

            {(cartTotal(selectedBirdArray)>=300 && cartTotal(selectedBirdArray)<500)  ?
            (   <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                </>
            ) :null}  

            {(cartTotal(selectedBirdArray)>=500 && cartTotal(selectedBirdArray)<1000)  ?
            (   <>
                    <li>{bonusItems[0]}</li>
                    <li>{bonusItems[1]}</li>
                    <li>{bonusItems[2]}</li>
                </>
            ) :null}  
            
        </ul>
    </div>
  )
}

export default Cart