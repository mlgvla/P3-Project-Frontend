import React from "react";

function ClothingCard({ piece, onClothingClick }) {
  return (
    <div>
      <h1>{piece.title}</h1>
      <p>${piece.price}.00</p>
      <p>In stock: {piece.quantity}</p>
      <p>Brand: {piece.brand}</p>
      <img
        src={piece.url}
        alt=""
        id="clothing-images"
        onClick={() => onClothingClick(piece.id)}
      ></img>
    </div>
  );
}

export default ClothingCard;
