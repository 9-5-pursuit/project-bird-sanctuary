import React, { useState } from 'react'

function PopUp() {
  const [popUp, setPopUp] = useState(false)

  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  

  return (
    <>
    {popUp && (
      <div>
      <div>
        <p>You have adopted a bird. Thank you!</p>
        </div>
      <button onClick={togglePopUp}>CLose</button>  
    </div>)}
    </>
  )

    
    
}

export default PopUp