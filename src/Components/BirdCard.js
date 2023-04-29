export default function BirdCard({ bird }) {
    return (
    <div className="card" style={{border: "2px solid black"}}>
        <h3>{bird.name}</h3>
        <p>Price: {bird.amount}</p>
        <img src={bird.img} alt="bird"/>
        <button>ADOPT</button>
    </div>)
}