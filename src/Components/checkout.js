import React from 'react'

function Checkout() {
  return (
    <form className='form'>
    <label htmlFor="First Name" style={{ display: "block", marginBottom: "0.5em" }}
    ></label><input
      id="First Name"
      name="First Name"
      type="text"
      
      style={{ marginBottom: "1em" }} />
    <label htmlFor="lastName" style={{ display: "block", marginBottom: "0.5em" }}></label>
    <input
      id="Last Name"
      name="lastName"
      type="text"
    
      style={{ marginBottom: "1em" }} />
    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5em" }}></label>
    <input
      id="email"
      name="email"
      type="email"
      style={{ marginBottom: "1em" }} />
    <label htmlFor="zipCode" style={{ display: "block", marginBottom: "0.5em" }}></label>
    <input
      id="zipCode"
      name="zipCode"
      type="number"
      min={999}
      style={{ marginBottom: "1em" }} />
    {/* <label htmlFor="creditcard" style={{ display: "block", marginBottom: "0.5em" }}></label>
    <input
      id="creditcard"
      name="creditcard"
      type='text'
      placeholder="0"
      style={{ marginBottom: "1em" }} /> */}
    <button style={{ width: 'min-content', display: "block" }} type="submit">SUBMIT</button>
  </form>
  )
}

export default Checkout