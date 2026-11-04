import React from "react";

import styled from "styled-components";

import boost_bg from "../images/bg-boost-desktop.svg";

const Boost = () => {
    return (
        <StyledBoost>
            <h2>Boost your links today</h2>
            <button className="btn round-btn">Get Started</button>
        </StyledBoost>
    )
}

const StyledBoost = styled.section`
  background-image: url(${boost_bg});
  background-color: hsl(257, 27%, 26%);
  background-size: cover;
  padding: 4rem;
  width: 100%;
  border-radius: 0;
  text-align: center;
  h2 {
    color: white;
    margin-bottom: 1rem;
  }
`;

export default Boost;