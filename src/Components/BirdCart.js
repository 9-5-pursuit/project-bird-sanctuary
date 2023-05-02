import React from "react";


 export default function BirdCart({cart}){
   
  const handlesSum =  cart.reduce((total, current)=>
  total + current.amount, 0);

  
  
  
    
        
     
       

         return(
                <div className="block col-2">
                    <h2>Cart </h2>
                    <div>Discount:{cart.length>=3 && <div>10%</div>}
                    <h3>Total:{handlesSum}</h3>
                
                     
                     {cart.map((item)=>(
                       
                        <div key={item.id}>
                            
                             <div > {item.name} ${item.amount}</div>
                             </div>
                      )
                      )}   
                        
                    </div>
                </div>


        )
     }
