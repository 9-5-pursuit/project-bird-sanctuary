function Birdcard({ birdData, handleAddAdoptCart }) {
  return (
    <div className="card">
      {birdData.map((bird, index) => {
        return (
          <div key={index}>
            <div className="bird-card">
              <h5>{bird.name}</h5>
              <p>Price: ${bird.amount}</p>
              <img src={bird.img} alt="" width={100} height={100} />
              <br />
              <button onClick={() => handleAddAdoptCart(bird)}>Adopt</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Birdcard;
