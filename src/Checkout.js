import React, {useState} from 'react'

function Checkout() {
    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        zip: "",
        email: "",
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        handleReset()
    }

    function handleTextChange(e) {
        setuser({
            ...user,
            [e.target.id]: e.target.value
        })
    }

    function handleReset() {
        setuser({
            firstName: "",
            lastName: "",
            zip: "",
            email: "",  
        })
    }


  return (
   <div className='checkout-section'>
    <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
            <p>First Name</p>
            <input
            type='text'
            id='firstName'
            name='firstName'
            value={user.firstName}
            onChange={handleTextChange}
            />
            <br/>
            <p>Last Name</p>
            <input
            type='text'
            id='lastName'
            name='lastName'
            value={user.lastName}
            onChange={handleTextChange}
            />
            <br/>
            <p>Email</p>
            <input
            type='email'
            id='email'
            name='email'
            value={user.email}
            onChange={handleTextChange}
            />
            <br/>
            <p>Zip Code</p>
            <input
            type='number'
            id='zip'
            name='zip'
            value={user.zip}
            onChange={handleTextChange}
            />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Checkout