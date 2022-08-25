import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

let allReviews = [];

function ClothingDetails() {
  const [clothingDetails, setClothingDetails] = useState({});
  const { id } = useParams();

  function makeReviews(data) {
    console.log("in make review", data);
    allReviews = data.reviews.map((review) => (
      <Review review={review} key={review.id} />
    ));
  }

  console.log(allReviews);

  useEffect(() => {
    fetch(`http://localhost:9292/clothes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setClothingDetails(data);
        makeReviews(data);
      });
  }, []);

  return (
    <>
      <img id="detail-photo" src={clothingDetails.url} alt=""></img>
      <h1 id="title">{clothingDetails.title}</h1>
      <h2 id="clothing-information">
        ${clothingDetails.price} BY {clothingDetails.brand}
      </h2>
      <h2>{allReviews}</h2>
    </>
  );
}

export default ClothingDetails;
