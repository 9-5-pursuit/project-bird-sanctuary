
 import  birdData  from "../data/birds"
 
export default function BirdCard(handleAddBird) {
  return (
    <>
      {birdData.map(({ name, amount, img }) => {
        return (
          <div className="card">
            <label htmlFor="name">{name}</label>
            <br />
            <label htmlFor="amount">Price ${amount}</label>
            <img src={img} alt={name} />
            <br />
            <button onClick={() => handleAddBird}>Adopt</button>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}

