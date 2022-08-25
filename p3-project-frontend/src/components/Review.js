import React from "react";
import { useState } from "react";
import EditReviewForm from "./EditReviewForm";

function Review({ review }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const comment = review.comment;
  const user = review.user.name;

  function handleDelete() {
    fetch("http://localhost:9292/reviews/" + review.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div id="review-container">
      <div id="review-user">{user}</div>
      <div id="review-comment">
        {comment}
        <br></br>
        <button id="edit-button" onClick={() => setShowEditForm(true)}>
          Edit Review
        </button>
        <button id="delete-button" onClick={handleDelete}>
          X
        </button>
        {showEditForm ? <EditReviewForm review={review} /> : null}
      </div>
    </div>
  );
}

export default Review;
