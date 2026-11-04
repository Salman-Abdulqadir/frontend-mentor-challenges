import React from "react";
import styled from "styled-components";

import { BsMoonStars, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useDispatch,useSelector } from "react-redux";
import { changeTheme } from "../redux/themeReducer";

const Nav = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state=> state.theme.theme)
  return (
    <StyledNav className="dark-element flex">
      <Link className="home" to={"/"}>
        <h1>Where is the world?</h1>
      </Link>
      <h3 onClick={() => dispatch(changeTheme())} className="flex">
        {theme === "light" ? (
          <>
            <BsMoonStars /> Dark Mode
          </>
        ) : (
          <>
            <BsSun /> Light Mode
          </>
        )}
      </h3>
    </StyledNav>
  );
};

const StyledNav = styled.header`
align-items: center;

  padding: 2rem 5%;
  border-bottom: 2px solid #dcdcdc;
  .home{
    text-decoration: none;
    color: black;
  }
  h3{
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
  @media screen and (max-width:500px){
    h1{
        font-size: 1.3rem;
    }
    h3{
        font-size: medium;
    }
  }
`;
export default Nav;
