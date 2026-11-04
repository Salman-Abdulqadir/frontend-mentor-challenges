import React from "react";
import styled from "styled-components";

import ShortendLink from "./shortendLink";

const Links = ({links}) => {
    return (
      <StyledList>
        {links.map((link, index) => (
          <ShortendLink
            original_link={link.original_link}
            shortend_link={link.shortend_link}
            key={index}
          />
        ))}
      </StyledList>
    );
}

const StyledList = styled.div`
  padding: 3rem 0rem;
  background-color: hsla(257, 7%, 63%, 0.1);
`;
export default Links;