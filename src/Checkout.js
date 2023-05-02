import React from 'react';

function Checkout() {

    // function handleSubmit(e) {
    //     e.preventDefault();
    // }

  return (
    <form>
        <label>First Name</label>
        <input type='text'></input>
        <label>Last Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Zip Code</label>
        <input type='text'></input>
        <button type='submit'>Submit</button>
    </form>
  );
}

export default Checkout;