import React from "react";
import styled from "styled-components";

import { BsSearch } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/countriesReducer";

const Filters = () => {
  const dispatch = useDispatch();

  //searching countries based on their names or region
  const searchCountries = (e) => {
    const query = e.target.value;

    // if the source of the request is the input field, it will search for a countries name
    const type = e.target.id === "input" ? "name" : "region";
    dispatch(
      fetchCountries({
        type,
        name: query,
      })
    );
  };
  return (
    <StyledFilters className="flex">
      <div className="dark-element input-field flex">
        <BsSearch className="icon" />
        <input
          id="input"
          className="dark-element"
          onKeyUp={searchCountries}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className="select-field dark-element">
        <select onChange={searchCountries}>
          <option className="dark-element" value="" default disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </StyledFilters>
  );
};

const StyledFilters = styled.div`

  width: 90%;
  margin: 3rem auto;
  gap: 3rem;
  
  .input-field {
    flex-grow: 2;
    align-items: center;
    padding: 0rem 2rem;
    border: 1px solid hsl(0, 0%, 90%);
    background-color: white;
    input {
      font-size: large;
      border: none;
      outline: none;
      padding: 0.75rem 2rem;
      width: 100%;
      flex: 1;
    }
  }
  .select-field {
    padding: 0;
    select{
        padding: 0.75rem 2rem;
        font-size: large;
        outline: none;
    }
  }
`;
export default Filters;
