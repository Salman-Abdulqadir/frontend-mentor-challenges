import React from "react";
import styled from "styled-components";

//importing images
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <StyledFooter className="flex">
        <h2>Shortly</h2>
        <ul>
          <h4>Features</h4>
          <li>Link Shortening</li>
          <li>Branded links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <h4>Resources</h4>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <h4>Company</h4>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="flex">
          <img src={facebook} alt="facebook" />

          <img src={twitter} alt="twitter" />

          <img src={pinterest} alt="pinterest" />

          <img src={instagram} alt="instagram" />
        </ul>
      </StyledFooter>
    </footer>
  );
};

const StyledFooter = styled.footer`
  width: 80%;
  margin: auto;
  padding: 4rem 0rem;
  align-items: flex-start;
  h2 {
    margin-top: 2rem;
    flex: 1;
  }
  ul {
    margin-top: 2rem;
    flex: 1;
  }
  ul h4 {
    margin-bottom: 1rem;
  }
  ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export default Footer;
