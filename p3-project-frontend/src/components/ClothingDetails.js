import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import Review from "./Review";

let allReviews = [];

function ClothingDetails() {
  const [clothingDetails, setClothingDetails] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const { id } = useParams();

  // function makeReviews(data) {
  //   allReviews = data.reviews.map((review) => (
  //     <Review review={review} key={review.id} />
  //   ));
  // }

  const allReviews = userReviews.map((userReview) => (
    <Review
      review={userReview}
      userName={userReview.user.name}
      key={userReview.id}
    />
  ));

  useEffect(() => {
    fetch(`http://localhost:9292/clothes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setClothingDetails(data);
        setUserReviews(data.reviews);
        // makeReviews(data);
      });
  }, []);

  console.log(userReviews);

  return (
    <div id="page-container">
      <div id="left-side">
        <img id="detail-photo" src={clothingDetails.url} alt=""></img>
        <h1 id="title">{clothingDetails.title}</h1>
        <h2 id="clothing-information">
          ${clothingDetails.price} BY {clothingDetails.brand}
        </h2>
        <AddReviewForm
          id={id}
          userReviews={userReviews}
          setUserReviews={setUserReviews}
        />
      </div>
      <div id="right-side">{allReviews}</div>
    </div>
  );
}

export default ClothingDetails;
