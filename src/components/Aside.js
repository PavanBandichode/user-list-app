import React, { useState } from "react";

function Aside(props) {
  let { setActive, active, handleClick } = props;
  return (
    <section className="nav-bar flex-30">
      <ul>
        <li
          className={active === "1" ? "active" : ""}
          id="1"
          onClick={handleClick}
        >
          Products
        </li>
        <li
          className={active === "2" ? "active" : ""}
          id="2"
          onClick={handleClick}
        >
          Demo Script
        </li>
        <li
          className={active === "3" ? "active" : ""}
          id="3"
          onClick={handleClick}
        >
          Customers
        </li>
        <li
          className={active === "4" ? "active" : ""}
          id="4"
          onClick={handleClick}
        >
          Sales Team
        </li>
        <li
          className={active === "5" ? "active" : ""}
          id="5"
          onClick={handleClick}
        >
          Demos
        </li>
        <li
          className={active === "6" ? "active" : ""}
          id="6"
          onClick={handleClick}
        >
          Settings
        </li>
      </ul>
    </section>
  );
}

export default Aside;
