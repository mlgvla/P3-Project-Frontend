import React from "react";

function ClothingCard({ piece, onClothingClick }) {
  return (
    <div>
      <h1>{piece.title}</h1>
      <p>{piece.price}</p>
      <p>{piece.quantity}</p>
      <p>{piece.brand}</p>
      <img src={piece.url} alt=""></img>
    </div>
  );
}

export default ClothingCard;
