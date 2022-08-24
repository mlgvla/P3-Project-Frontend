import React from "react";

function ClothingDetails({ featuredClothing }) {
  return (
    <>
      <img id="detail-photo" src={featuredClothing.url} alt=""></img>
      <h1 id="title">{featuredClothing.title}</h1>
      <h2 id="clothing-information">
        ${featuredClothing.price} BY {featuredClothing.brand}
      </h2>
      <h1>in clothing details</h1>
      {/* <h2>
        {featuredClothing.reviews.map((review) => {
          return <p>{review.comment}</p>;
        })}
      </h2> */}
    </>
  );
}

export default ClothingDetails;
