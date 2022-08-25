import React from "react";
import { Link } from "react-router-dom";

function ClothingCard({ piece }) {
  return (
    <div id="clothing-hub">
      <img id="hub-photo" src={piece.url} alt=""></img>
      <Link to={`/clothes/${piece.id}`}>
        <h1 id="title">{piece.title}</h1>
      </Link>
      <h2 id="clothing-information">
        ${piece.price} BY {piece.brand}
      </h2>
      <h3>{piece.users}</h3>
    </div>
  );
}

export default ClothingCard;
