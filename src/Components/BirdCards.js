// export default function BirdCards({ bird, birdData }) {
//   let bird = birdData.map((bird) => {
//     return (
//       <div className="birdCards" key={bird.id}>
//         <h4>{bird.name}</h4>
//         <img src={bird.img} alt="" />
//         <p>Price: ${bird.amount}</p>
//         <button onClick={(e) => this.props.handleOnClick(bird)}>Adopt</button>
//       </div>
//     );
//   });
//   <div>{bird}</div>;
// }
export default function BirdCard({ bird, handleAddToCart }) {
  return (
    <div className="card bird-card">
      <h2>{bird.name}</h2>
      <p>Price: ${bird.amount}</p>
      <img src={bird.img} alt="" />
      <button onClick={() => handleAddToCart(bird)}>Adopt</button>
    </div>
  );
}
