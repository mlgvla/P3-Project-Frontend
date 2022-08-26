import React from "react";
import { useState } from "react";

function AddReviewForm({ id, userReviews, setUserReviews }) {
  console.log(id);

  const [formData, setFormData] = useState({
    user_id: 1,
    clothing_id: parseInt(id),
    comment: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((addedReview) => {
        const modifiedReview = {
          id: addedReview.id,
          comment: addedReview.comment,
          username: addedReview.user.name
        }
        setUserReviews([...userReviews, modifiedReview]);
        setFormData({
          user_id: 1,
          clothing_id: parseInt(id),
          comment: "",
        })
  })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          size="50"
          name="comment"
          value={formData.comment}
          type="text"
          placeholder="Add Review"
          onChange={handleInputChange}
        ></input>
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default AddReviewForm;
