import React from 'react'

function Checkout({handleCart, adopt}) {

  function handleSubmit(e) {
    e.preventDefault()
    if (!adopt.length) return
    handleCart()
    e.target.firstName.value = ''
    e.target.lastName.value = ''
    e.target.email.value = ''
    e.target.zipCode.value = null
    alert('You have adopted birds. Thank you!')
  }
  return (
    <form className='Checkout' onSubmit={handleSubmit} >
    <label htmlFor="firstName"
    >First Name</label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      style={{ marginBottom: "1em" }} />
    <label htmlFor="lastName">Last Name</label>
    <input
      id="lastName"
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
      min={9999}
      style={{ marginBottom: "1em" }} />
    <input type="submit" />
  </form>
  )
}

export default Checkout