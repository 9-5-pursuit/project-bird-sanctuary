import Bonus from "./Bonus.js";

const Cart = ({ cart, setCart }) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].amount;
    }

    const removeItem = (id) => {
        setCart((cart) => cart.filter((bird) => bird.id !== id));
    };

    return (
        <div className="Cart">
            <p>Cart</p>
            <p>Discount: {cart.length >= 3 ? 10 : 0}%</p>
            <h4>Total: ${total} </h4>
            <ol>
                {cart.map(({ id, name, amount }) => (
                    <li key={id}>
                        {name}: ${amount}
                        <button onClick={() => removeItem(id)}>X</button>
                    </li>
                ))}
            </ol>
            {total ? (
                <>
                    <p className="bonus">
                        Your adoption gets you the following items:
                    </p>
                    <ul>
                        <Bonus total={total} />
                    </ul>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;