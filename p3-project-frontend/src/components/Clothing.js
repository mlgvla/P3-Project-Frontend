import React from "react";
import ClothingCard from "./ClothingCard";

function Clothing({ clothing, onClothingCardClick, HandleClothingFetch }) {
  const clothingArr = clothing.map((piece) => {
    return (
      <ClothingCard
        key={piece.id}
        piece={piece}
        HandleClothingFetch={HandleClothingFetch}
        onClothingCardClick={onClothingCardClick}
      />
    );
  });
  return <div className="clothing-container">{clothingArr}</div>;
}

export default Clothing;
