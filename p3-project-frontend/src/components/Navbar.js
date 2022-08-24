import React from "react";
import { Link } from "react-router-dom";

function NavBar({ onHomeClick, onCartClick }) {
  function handleCartClick() {
    onCartClick();
  }

  function handleClick() {
    onHomeClick();
  }
  return (
    <div className="topnav">
      <Link id="home-button" onClick={handleClick} to="/">
        &#8962;
      </Link>
      <Link id="nav-title" onClick={handleClick} to="/">
        grahnoah
      </Link>
      <Link id="checkout-button" onClick={handleCartClick} to="/cart">
        {" "}
        &#x1f6d2;
      </Link>
    </div>
  );
}

export default NavBar;
