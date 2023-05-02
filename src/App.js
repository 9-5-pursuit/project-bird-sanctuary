// import {useState} from 'react';

// import birdData from './data/birds';
  import './App.css'
 import ShowBird from './Components/ShowBird';
 import BirdCart from './Components/BirdCart';
 import BirdForm from './Components/BirdForm';
 import BirdData from './data/birds';
 import { useState } from 'react';




function App () {
  //const {birdData}= Birds
  console.log(BirdData)
 
//   // const [birds, setBirds] = useState(birdData);
//   // const [newBirdForm, setNewBirdForm] = useState(false);
   const [cart, setcart] = useState([]); 
  
//   //  function handleAddBird(bird){
    
   
//   //    setBirds([bird, ...birds]);
//\    }
  
  
    function addToCart(bird){
     
     const index = cart.find((item)=> item.id === bird.id);
     if (!index){
     setcart([...cart,{...bird}]);


  }
    
  
}

   
  
    

  

   return (
    <div className="App">
     

       <ShowBird addToCart={addToCart} BirdData={BirdData}/>
     <aside className='.col-2'>
       <BirdCart cart={cart} BirdData={BirdData} />
     <BirdForm />
        </aside>
    </div>
    
    
  );
 };

 export default App;
