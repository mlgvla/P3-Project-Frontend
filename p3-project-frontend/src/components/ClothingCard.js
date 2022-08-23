import React from "react";

export default ClothingCard;
function ClothingCard({ piece, onClothingClick }) {
  return (
    <div className="clothing-card" id="clothing-hub">
      <img
        id="hub-photo"
        src={piece.url}
        alt=""
        onClick={() => onClothingClick(piece.id)}
      ></img>
      <h1 id="title">{piece.title}</h1>
      <h2 id="clothing-information">
        ${piece.price} BY {piece.brand}
      </h2>
    </div>
  );
}
