import React from "react";
import ClothingCard from "./ClothingCard";

function Clothing({ clothing }) {
  const clothingArr = clothing.map((piece) => {
    return <ClothingCard key={piece.id} piece={piece} />;
  });
  return <div>{clothingArr}</div>;
}

export default Clothing;
