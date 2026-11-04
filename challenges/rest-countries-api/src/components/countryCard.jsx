import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { setDetails } from "../redux/countryDetailReducer";

import { Link } from "react-router-dom";

const Country = ({
  imageUrl,
  name,
  population,
  region,
  capital,
  country,
}) => {
  const dispatch = useDispatch();
  return (
    <StyledCard className="country-card">
      <Link to={`/country/${name}`}>
        <div
          onClick={() => dispatch(setDetails(country))}
          className="image-wrapper"
        >
          <img src={imageUrl} alt={`${name}'s Flag`} />
        </div>
      </Link>
      <div className="country-info">
        <h2>{name}</h2>
        <p>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: white;
  box-shadow: 10px 10px 20px rgba(232, 229, 229, 0.5);
  border-radius: 1rem;
  .image-wrapper {
    height: 13rem;
    overflow: hidden;
    img {
        border-radius: 1rem;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .country-info {
    padding: 1rem;
    h2 {
      margin-bottom: 1rem;
    }
    p span {
      color: grey;
    }
  }
`;

export default Country;
