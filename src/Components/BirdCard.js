export default function BirdCard({ bird, adoptBird }) {


    return (
    <div className="card" style={{border: "2px solid black"}}>
        <h3>{bird.name}</h3>
        <p>Price: {bird.amount}</p>
        <img src={bird.img} alt="bird"/>
        <button onClick={() => {adoptBird(bird)}}>ADOPT</button>
    </div>)
}