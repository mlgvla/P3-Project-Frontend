import React from "react";

function NavBar({ onHomeClick }) {
  function handleClick() {
    onHomeClick();
  }
  return (
    <div className="topnav">
      <h1 id="home-button" onClick={handleClick}>
        &#8962;
      </h1>
      <h1 id="nav-title" onClick={handleClick}>
        grahnoah
      </h1>
      <h1 id="checkout-button"> &#x1f6d2;</h1>
    </div>
  );
}

export default NavBar;
