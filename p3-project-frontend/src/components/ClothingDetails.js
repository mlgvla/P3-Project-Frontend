import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import Review from "./Review";

let allReviews = [];

function ClothingDetails() {
  const [clothingDetails, setClothingDetails] = useState({});
  const { id } = useParams();

  function makeReviews(data) {
    allReviews = data.reviews.map((review) => (
      <Review review={review} key={review.id} />
    ));
  }

  useEffect(() => {
    fetch(`http://localhost:9292/clothes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setClothingDetails(data);
        makeReviews(data);
      });
  }, []);

  return (
    <div id="page-container">
      <div id="left-side">
        <img id="detail-photo" src={clothingDetails.url} alt=""></img>
        <h1 id="title">{clothingDetails.title}</h1>
        <h2 id="clothing-information">
          ${clothingDetails.price} BY {clothingDetails.brand}
        </h2>
        <AddReviewForm id={id} />
      </div>
      <div id="right-side">{allReviews}</div>
    </div>
  );
}

export default ClothingDetails;
