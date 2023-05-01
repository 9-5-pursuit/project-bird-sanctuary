export default function Birds({ bird }) {
  function handleAdopt(event) {
    event.preventDefault();
    console.log("You adopted " + bird.id);
  }
  return (
    <>
      <li key={bird.id} className="Card">
        <h5>{bird.name}</h5>
        <p>{bird.amount}</p>
        <img src={bird.img} alt={bird.name} height="100px" />
        <br />
        <button onClick={handleAdopt}>Adopt</button>
      </li>
    </>
  );
}
