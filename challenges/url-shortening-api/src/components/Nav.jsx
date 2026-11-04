import React, {useState} from "react";

import styled from "styled-components";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const showNav = () => {
    setIsActive(!isActive)
  }
  return (
    <StyledNav className="flex">
      <div className="collapse flex">
        <h2>Shortly</h2>
        <div onClick={showNav} className={`burger ${isActive ? "active-burger" : ""}`}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>

      <div className={`links flex ${isActive ? "active" : ""}`}>
        <ul className="flex">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="btns flex">
          <button className="btn white-btn">Login</button>
          <button className="btn round-btn">Sign up</button>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 3rem 0rem;
  width: 80%;
  margin: auto;
  gap: 3rem;
  .collapse {
    flex: 1;
    h2{
      font-size: 2rem;
    }
    .burger {
      width: 2rem;
      .line {
        height: 5px;
        margin-bottom: 5px;
        background-color: black;
      }
      display: none;
    }
  }
  .links {
    flex: 4;
    gap: 3rem;
    ul li{
      color: #787878;
      &:hover{
        color: black;
      }
    }
  }
  @media screen and (max-width: 850px) {
    position: relative;
    .collapse .burger {
      display: block;
    }
    .links {
      transition: all 0.5s ease-in-out;
      position: absolute;
      z-index: 2;
      top: 8rem;
      width: 100%;
      border-radius: 10px;
      background-color: hsl(257, 27%, 26%);
      padding: 2rem;
      color: white;
      font-weight: bold;
      flex-direction: column;
      .flex {
        flex-direction: column;
      }
      .btns .btn {
        width: 100%;
        font-weight: bold;
        color: white;
      }
      transform: translateX(150%);
    }
    .active {
      transform: translateX(0%);
    }
    .active-burger {
      .line{
        transition: all 0.3s ease;
      }
      .line-2 {
        display: none;
      }
      .line-1 {
        transform: rotate(-45deg) translate(-3px, 2px);
      }
      .line-3 {
        transform: rotate(45deg) translate(-5px, -5px);
      }
    }
  }
`;
export default Nav;
