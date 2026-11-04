import React, { useState } from "react";

import styled from "styled-components";

const ShortendLink = ({ original_link, shortend_link }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(shortend_link);
    setIsCopied(true);
  };
  return (
    <StyledLink className="flex">
      <h3 className="original-link">{original_link}</h3>
      <div className="shortend flex">
        <h3 className="shortend-link">{shortend_link}</h3>
        <button
          className={!isCopied ? "btn" : "btn dark-btn"}
          onClick={copyText}
        >
          {!isCopied ? "Copy" : "Copied!"}
        </button>
      </div>
    </StyledLink>
  );
};

const StyledLink = styled.div`
  width: 80%;
  margin: 2rem auto;
  background-color: white;
  padding: 1rem;
  .btn{
    width: 6rem;
    flex: 1;
  }
  h3 {
    font-weight: 500;
    text-align: center !important;
  }
  .shortend-link {
    flex: 1;
    color: hsl(180, 66%, 49%);
  }
`;

export default ShortendLink;
