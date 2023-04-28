import React from 'react'

function Checkout({handleCart}) {

  function handleSubmit(e) {
    e.preventDefault()
    handleCart()
    alert('You have adopted birds. Thank you!')
  }
  return (
    <form className='Checkout' onSubmit={handleSubmit} >
    <label htmlFor="First Name"
    >First Name</label>
    <input
      id="First Name"
      name="firstName"
      type="text"
      style={{ marginBottom: "1em" }} />
    <label htmlFor="Last Name">Last Name</label>
    <input
      id="Last Name"
      name="lastName"
      type="text"
      style={{ marginBottom: "1em" }} />
    <label htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      style={{ marginBottom: "1em" }} />
    <label htmlFor="zipCode">Zip Code</label>
    <input
      id="zipCode"
      name="zipCode"
      type="number"
      min={999}
      style={{ marginBottom: "1em" }} />
    <input type="submit" />
  </form>
  )
}

export default Checkout