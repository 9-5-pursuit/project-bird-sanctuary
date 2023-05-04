function Checkout({ handleSubmit, handleTextChange, checkout }) {
  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <h3>Checkout</h3>
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            id="firstName"
            name="First Name"
            value={checkout.firstName}
            onChange={handleTextChange}
          />

          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="Last Name"
            value={checkout.lastName}
            onChange={handleTextChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={checkout.email}
            onChange={handleTextChange}
          />

          <label htmlFor="zip">Zip</label>
          <input
            type="number"
            id="zip"
            name="zip"
            value={checkout.zip}
            onChange={handleTextChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    </div>
  );
}
export default Checkout;
