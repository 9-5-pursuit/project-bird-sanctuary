export default function Checkout() {
  return (
    <>
      <form>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="zip">Zip Code:</label>
        <input type="tel" id="zip" />

        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
