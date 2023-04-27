import BirdCard from "./BirdCard";

const PageForBirdCards = ({ birds, setCart, cart }) => {
  return (
    <ul>
      {birds.map(({ name, amount, img, id }) => {
        return (
          <li key={id}>
            <BirdCard
              name={name}
              amount={amount}
              img={img}
              setCart={setCart}
              cart={cart}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PageForBirdCards;
