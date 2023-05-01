export default function Checkout({ handleSubmit }) {
  return (
    <>
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName"> First Name</label>
        <input type="text" id="firstName" />

        <label htmlFor="lastName"> Last Name</label>
        <input type="text" id="lastName" />

        <label htmlFor="email"> Email </label>
        <input type="email" id="email" />

        <label htmlFor="zipcode"> Zip code</label>
        <input type="text" id="zipcode" />
        <br></br>

        <input type="submit" onClick={handleSubmit} />
      </form>
    </>
  );
}
