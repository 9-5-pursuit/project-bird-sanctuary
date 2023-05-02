import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Loading, Hero, AddToCart } from "../components";
import styled from "styled-components";

const SingleBirdPage = () => {
  const { id } = useParams();

  const [bird, setBird] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log(data);
        const foundBird = data.find((bird) => bird.id === parseInt(id));
        console.log(foundBird);
        setBird(foundBird);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Wrapper>
      <Hero title="Bird Details" />
      {bird ? (
        <div className="section section-center page">
          <Link to="/gallery" className="btn">
            back to products
          </Link>
          <div className="bird-center">
            <img src={bird.img} alt={bird.name} />
            <section className="content">
              <h2>{bird.name}</h2>
              <h5 className="price">${bird.amount}</h5>
              <p className="desc">{bird.description}</p>
              <hr />
              {/* <button className="add-btn">Add to Cart</button> */}
              <AddToCart bird={bird} />
            </section>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .bird-center {
    display: flex;
    margin-top: 2rem;
    padding: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  img {
    width: 250px;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .content {
    margin-left: 2rem;
  }
  .add-btn {
    color: var(--clr-white);
    background: var(--clr-green-light);
  }

  @media (min-width: 992px) {
    .bird-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleBirdPage;
