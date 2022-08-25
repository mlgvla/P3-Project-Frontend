import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ClothingDetails() {
  const [clothingDetails, setClothingDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  console.log(clothingDetails);
  debugger;
  // const allReviews = featuredClothing.reviews.map((review) => {
  //   return review.user.name + "\n" + review.comment;
  // });

  useEffect(() => {
    fetch(`http://localhost:9292/clothes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setClothingDetails(data);
        console.log(data);
      });
  }, [id]);

  return (
    <>
      <img id="detail-photo" src={clothingDetails.url} alt=""></img>
      <h1 id="title">{clothingDetails.title}</h1>
      <h2 id="clothing-information">
        ${clothingDetails.price} BY {clothingDetails.brand}
      </h2>
      {/* <h2>{allReviews}</h2> */}
    </>
  );
}

export default ClothingDetails;
