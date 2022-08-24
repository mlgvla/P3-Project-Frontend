import React from "react";

function ClothingDetails({ showClothingDetails, featuredClothing }) {
  return (
    <>
      <img id="detail-photo" src={featuredClothing.url} alt=""></img>
      <h1 id="title">{featuredClothing.title}</h1>
      <h2 id="clothing-information">
        ${featuredClothing.price} BY {featuredClothing.brand}
      </h2>
    </>
  );
}

export default ClothingDetails;
