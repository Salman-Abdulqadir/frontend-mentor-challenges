import React from "react";

// redux
import { useSelector } from "react-redux";

import styled from "styled-components";
import CountryCard from "../components/countryCard";
import loader from "../images/loader.gif";

const Home = () => {
  const { isLoading, allCountries } = useSelector((state) => state.countries);

  //returnig and loader if the content is not loaded yet
  if (isLoading) {
    return (
      <div className="loading">
        <img src={loader} alt="loader" />
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <StyledSection>
      {allCountries.map((country, index) => (
        <CountryCard
          key={index}
          name={country.name.common}
          capital={country.capital}
          population={country.population}
          region={country.region}
          imageUrl={country.flags.svg}
          country={country}
          id={index}
        />
      ))}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`;
export default Home;
