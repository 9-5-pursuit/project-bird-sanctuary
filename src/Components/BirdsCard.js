function Birdcard({ birdData, handleAddAdoptCart }) {
  let bird = birdData.map((bird, index) => {
    return (
      <div className="card" key={index}>
        <h5>{bird.name}</h5>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt="" width={100} height={100} />
        <button onClick={() => handleAddAdoptCart}>Adopt</button>
      </div>
    );
  });
  return bird;
}
export default Birdcard;
