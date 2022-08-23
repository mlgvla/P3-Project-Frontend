import React from "react";

function ClothingCard({ piece }) {
  return (
    <div id="clothing-hub">
      <img id="hub-photo" src={piece.url} alt=""></img>
      <h1 id="title">{piece.title}</h1>
      <p id="clothing-information">
        ${piece.price} BY {piece.brand}
      </p>
    </div>
  );
}

export default ClothingCard;
