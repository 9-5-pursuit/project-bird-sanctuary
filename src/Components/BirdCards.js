import React, { useState } from "react";

// const [birds, setBirds] = useState(birdData);

function BirdCards() {
  return (
    <>
      {/* <div className="card">
        <section>
          <main>
            <ul>
              {birds.map((bird) => {
                return (
                  <li key={bird.id}>
                    <h3>{bird.name}</h3>
                    <h5>${bird.amount}</h5>
                    <p></p>
                    <img src={bird.img} alt="bird" width="150" height="150" />
                    <br />
                    <button
                      onClick={() => addToCart(bird.id, bird.name, bird.amount)}
                    >
                      ADOPT
                    </button>
                  </li>
                );
              })}
            </ul>
          </main>
        </section>
      </div> */}
    </>
  );
}

export default BirdCards;
