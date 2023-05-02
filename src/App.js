import Birdcards from "./Components/Birdcards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import { useState } from "react";

function App() {
    const [cart, setCart] = useState([]);
    const addToCart = (bird) => {
        let newBird = { ...bird, id: Math.random() };
        setCart((prev) => [...prev, newBird]);
        console.log(cart);
    };
    return (
        <div className="main">
            <>
                <section className="cart">
                    <Cart cart={cart} setCart={setCart} />
                </section>
                <section className="checkout">
                    <Checkout setCart={setCart} />
                </section>
                <section className="bird">
                    <ul className="birds">
                        {birdData.map((bird) => (
                            <Birdcards
                                bird={bird}
                                key={bird.id}
                                addToCart={addToCart}
                            />
                        ))}
                    </ul>
                </section>
            </>
        </div>
    );
}

export default App;
