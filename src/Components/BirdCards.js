

export default function BirdCards({ bird, birdData }) {
  let bird = birdData.map((bird) => {
    return (
      <div className="birdCards" key={bird.id}>
        <h4>{bird.name}</h4>
        <img src={bird.img} alt="" />
        <p>Price: ${bird.amount}</p>
        <button onClick={(e) => this.props.handleOnClick(bird)}>Adopt</button>
      </div>
    );
  });
  <div>{bird}</div>;
}
