export default function BirdCollection({ birds, grabElementDetails }) {
  return (
    <div className="birds container">
      {birds.map((bird) => {
        return (
          <div key={bird.id} className="bird card">
            <h4>{bird.name}</h4>
            <p>Price: ${bird.amount}</p>
            <img src={bird.img} alt={bird.name} className="" />
            <button onClick={() => grabElementDetails(bird)}>Adopt</button>
          </div>
        );
      })}
    </div>
  );
}
