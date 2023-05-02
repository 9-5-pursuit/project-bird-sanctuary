export default function Checkout({ cart, handleSubmit }) {
  return (
    <>
      <div className="Checkout container">
        <form onSubmit={handleSubmit}>
          <label>First name</label>
          <input placeholder="First Name" type="text"></input>
          <label>last name</label>
          <input placeholder="Last Name" type="text"></input>
          <label>email</label>
          <input placeholder="Email" type="Email"></input>
          <label>zip code</label>
          <input type="number" placeholder="Zip Code"></input>
          <label></label>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
