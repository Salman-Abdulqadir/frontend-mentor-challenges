import React from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const path = location.pathname
  return (
    <header className="main-header">
      <nav className="flex-col">
        <div className="flex">
          <h4 className={path === "/" ? "active-page" : ""}>1</h4>
          <div>
            <p>Step 1</p>
            <h2>YOUR INFO</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className={path === "/plan" ? "active-page" : ""}>2</h4>
          <div>
            <p>Step 2</p>
            <h2> PLAN</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className={path === "/addon" ? "active-page" : ""}>3</h4>
          <div>
            <p>Step 3</p>
            <h2>ADD ONS</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className={path === "/summary" ? "active-page" : ""} >4</h4>
          <div>
            <p>Step 4</p>
            <h2>SUMMARY</h2>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;