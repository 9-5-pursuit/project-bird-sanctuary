import birdData from "./data/birds";

function App() {
  console.log(birdData);

  function handleSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds.Thank you!");
  }
  return (
    <div>
      <h1>BOOOO</h1>
      <div className="Card">
        <ul>
          {birdData.map((bird) => {
            return (
              <li className="Card" key={bird.id} alt="">
                <h2>{bird.name}</h2>
                <p>{bird.amount}</p>
                <img src={bird.img} />

                <button>Adopt</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: 0</h4>
        <h4>Total: $0</h4>
        <ol></ol>
        <p></p>
        <ul className="Bonus"></ul>
      </div>
      <div className="Checkout">
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
      </div>
    </div>
  );
}

export default App;
{
  /**
   


<div className="Cards">
<h3>Bird Name<h3/>
<img/>
<p>Amount<p/>
<button>Adopt<button/>
<div/>

<div className="Cart">
<h2>Cart<h2/>
<h4>Discount:0% or 10%<h4/> // (> 3) = 0% (=<3) = 10%
<h4>Total: $0<h4/>
<ol>
<li>
Bird adoption info
<li/>
<ol/>
<p><p/>
<ul>
<li><li/> 1 bonus bonusItems[0] 100-299
<li><li/> 2 bonus bonusItems[1] 300-499
<li><li/> 3 bonus bonusItems[2] 500- 999
<li><li/> 4 bonus bonusItems[3] 1000+



<ul/>
<div/>


<div className="Checkout">
<h2> Checkout <h2/>
<form>
<label>
<input><input/>

<label>
<input><input/>

<label>
<input><input/>

<label>
<input><input/>

<button>Submit<button/> or <input>
// You have adopted birds.Thank you! Alert
// ^^
<form/>

<div/>


*/
}
