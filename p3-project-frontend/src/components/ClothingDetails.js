import React from "react";

function ClothingDetails({ featuredClothing }) {
  const allReviews = featuredClothing.reviews.map((review) => {
    return review.user.name + "\n" + review.comment;
  });

  return (
    <>
      <img id="detail-photo" src={featuredClothing.url} alt=""></img>
      <h1 id="title">{featuredClothing.title}</h1>
      <h2 id="clothing-information">
        ${featuredClothing.price} BY {featuredClothing.brand}
      </h2>
      <h2>{allReviews}</h2>
    </>
  );
}

export default ClothingDetails;
