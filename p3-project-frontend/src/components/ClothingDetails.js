import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AddReviewForm from "./AddReviewForm"
import Review from "./Review"

function ClothingDetails() {
  const [clothingDetails, setClothingDetails] = useState({})
  const [userReviews, setUserReviews] = useState([])
  const { id } = useParams()

  const allReviews = userReviews.map((userReview) => (
    <Review
      userReview={userReview}
      userReviews={userReviews}
      setUserReviews={setUserReviews}
      key={userReview.id}
    />
  ))

  useEffect(() => {
    fetch(`http://localhost:9292/clothes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setClothingDetails(data)
        const mappedReviews = data.reviews.map((review) => {
          return {
            id: review.id,
            comment: review.comment,
            username: review.user.name,
          }
        })
        setUserReviews(mappedReviews)
      })
  }, [])

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
  )
}

export default ClothingDetails
