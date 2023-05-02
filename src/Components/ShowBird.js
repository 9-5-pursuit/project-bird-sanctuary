import React from "react";
import BirdDetails from "./BirdDetails";


 export default function ShowBird({BirdData, addToCart,}){
  console.log(BirdData)

  //   <ul>
//     <li>
//       {birdData.map(({img, name, amount, id})=>{
         return(
           
              <main>
                <div className="App">
                  {BirdData.map((bird)=>(
                    <BirdDetails key={bird.id} bird={bird} addToCart={addToCart}/>
                  ))}
                </div>

              </main>
//           <div key = {id}>
// //          <h2>{name}</h2>
// //          <p>{amount}</p>
// //          <img src={img} alt={name}/>
// //          <button >Adopt</button>
// //       </div>
        )
//       })}
//     </li>
//   </ul>
 }





// const birdsArray = [...birds]
// let ShowBird = birdsArray.map((bird) => {
//   return(
//      <>
//      <BirdCard key= {bird.id}
//           name={bird.name}
//           img={bird.img}
//           amount ={bird.amount}/>
//           </>


// export default function BirdCard({name,amount,img,}){

//   return(
//       <div>
//          <h2>{name}</h2>
//          <p>{amount}</p>
//          <img src={img} alt=""/>
//          <button >Adopt</button>
//       </div>
//   )
// }
//   )
// }
//  )

//  export default ShowBird

