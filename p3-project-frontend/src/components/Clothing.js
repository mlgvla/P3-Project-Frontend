import React from "react";
import ClothingCard from "./ClothingCard";

function Clothing({ clothing, onClothingClick, onClothingCardClick }) {
  const clothingArr = clothing.map((piece) => {
    return (
      <ClothingCard
        key={piece.id}
        piece={piece}
        onClothingClick={onClothingClick}
        onClothingCardClick={onClothingCardClick}
      />
    );
  });
  return <div className="clothing-container">{clothingArr}</div>;
}

export default Clothing;
