export default function Checkout({ handleSubmit }) {
    return (<div className="Checkout">
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <label>First Name</label>
            <input type="text"></input><br/>

            <label>Last Name</label>
            <input type="text"></input><br/>

            <label>Email</label>
            <input type="email"></input><br/>

            <label>Zip Code</label>
            <input type="number"></input><br/>

            <input type="submit" value="Submit"></input>
        </form>
    </div>)
}