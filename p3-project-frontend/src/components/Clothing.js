import React from "react";
import ClothingCard from "./ClothingCard";

function Clothing({ clothing, onClothingClick }) {
  const clothingArr = clothing.map((piece) => {
    return (
      <ClothingCard
        key={piece.id}
        piece={piece}
        onClothingClick={onClothingClick}
      />
    );
  });
  return <div>{clothingArr}</div>;
}

export default Clothing;
