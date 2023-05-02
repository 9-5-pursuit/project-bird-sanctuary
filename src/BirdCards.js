function BirdCards({ birdData, handleCart }) {
  return (
    <div>
      {birdData.map(({ img, amount, id, name }) => {
        return (
          <div key={id} className="card">
            <h3>{name}</h3>
            <h4>Price: ${amount}</h4>
            <img src={img} alt="#" />
            <div>
              <button
                className="cardButton"
                value={amount}
                name={name}
                onClick={handleCart}
              >
                Adopt
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BirdCards;
