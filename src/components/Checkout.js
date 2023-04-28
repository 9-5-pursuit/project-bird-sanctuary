export default function Checkout() {
  return (
    <>
      <form>
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" />

        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" />

        <label for="email">Email:</label>
        <input type="email" id="email" />

        <label for="zip">Zip Code:</label>
        <input type="tel" id="zip" />

        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
