import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

//redux
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const navigate = useNavigate();
  const country = useSelector((state) => state.countryDetails.details);

  if (country.length === 0) return navigate("/");

  return (
    <StyledSection className="details-page">
      <button className=" dark-element back-btn" onClick={() => navigate("/")}>
        <BsArrowLeft /> Back
      </button>
      <div className="country flex">
        <div className="country-flag">
          <img src={country.flags.png} alt="" />
        </div>
        <div className="country-details">
          <h1>
            {country.name.common} {country.flag}
          </h1>
          <div className="country-info flex">
            <div>
              <p>
                Native Name:{" "}
                <span>
                  {Object.values(country.name.nativeName)[0].official}
                </span>
              </p>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain:{" "}
                {country.tld.map((element, index) => (
                  <span key={index}>{element}</span>
                ))}
              </p>
              <p>
                Currencies:
                {Object.values(country.currencies).map((element, index) => (
                  <span key={index}>{element.name}</span>
                ))}
              </p>
              <p>
                Language:{" "}
                {Object.values(country.languages).map((element, index) => {
                  let languages = "";
                  if (index < Object.keys(country.languages).length - 1)
                    languages += element + ", ";
                  else languages += element;
                  return <span key={index}>{languages}</span>;
                })}
              </p>
            </div>
          </div>
          <div className="flex">
            <p>Border Countries:</p>
            <div className="flex">
              {country.borders ? (
                country.borders.map((element, index) => (
                  <button key={index}>{element}</button>
                ))
              ) : (
                <p>No bordering countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  width: 90%;
  margin: 4rem auto;
  .flex {
    justify-content: flex-start;
    gap: 2rem;
  }
  p {
    font-weight: bold;
  }
  .back-btn {
    margin-bottom: 5rem;
    padding: 1rem 2rem;
    font-size: large;
    display: flex;
    gap: 1rem;
    box-shadow: 0px 0px 20px hsl(0, 0%, 90%);
  }
  .country {
    margin: auto;
    gap: 6rem;
    .country-flag {
      max-height: 50vh;
      flex: 1;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .country-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h1 {
        font-size: 200%;
      }
      .country-info {
        p {
          margin-bottom: 1rem;
          span,
          p,
          button {
            font-weight: normal;
          }
        }
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      gap: 1rem;
      .country-flag {
        overflow: hidden;
        min-height: 40vh;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain !important;
        }
      }
      .country-details h1 {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default CountryDetails;
