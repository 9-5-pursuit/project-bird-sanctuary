export default function CheckOutForm() {
    
    return (
        <form>
            <h4>Checkout</h4>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
       />
         <label htmlFor="firstname">Last Name</label>
        <input
          type="text"
          id="lastname"
            />
         <label htmlFor="firstname">Email</label>
        <input
          type="email"
          id="email"
            />
             <label htmlFor="firstname">Zip Code</label>
        <input
          type="number"
          id="zipcode"
            />
            <br
            />
        <button onClick={() => false}>Submit</button>    

      </form>
    );
}