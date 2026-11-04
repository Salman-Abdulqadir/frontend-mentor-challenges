import React from "react";
import styled from "styled-components";

import Result from "./result";
import Amount from "./amount";

const Splitter = () => {
    return(
        <StyledCard>
            <Amount/>
            <Result/>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    background-color: white;
    padding: 2rem;
    min-height: 45vh;
    border-radius: 1rem;
`

export default Splitter;