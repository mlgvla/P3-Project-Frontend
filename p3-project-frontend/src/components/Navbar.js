import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav">
      <Link id="home-button" to="/">
        &#8962;
      </Link>
      <Link id="nav-title" to="/">
        grahnoah
      </Link>
      <Link id="checkout-button" to="/cart">
        &#x1f6d2;
      </Link>
    </div>
  );
}

export default NavBar;
