import React from "react"
import { useState } from "react"
import EditReviewForm from "./EditReviewForm"

function Review({ userReview, userReviews, setUserReviews }) {
  const { id, comment, username } = userReview
  const [showEditForm, setShowEditForm] = useState(false)

  function handleDelete() {
    fetch("http://localhost:9292/reviews/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const modifiedReviews = userReviews.filter(
          (userReview) => userReview.id !== data.id
        )
        setUserReviews(modifiedReviews)
      })
  }

  return (
    <div id="review-container">
      <div id="review-user">{username}</div>
      <div id="review-comment">
        {comment}
        <br></br>
        <button id="edit-button" onClick={() => setShowEditForm(true)}>
          Edit Review
        </button>
        <button id="delete-button" onClick={handleDelete}>
          X
        </button>
        {showEditForm ? (
          <EditReviewForm
            review={userReview}
            userReviews={userReviews}
            setUserReviews={setUserReviews}
            setShowEditForm={setShowEditForm}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Review
