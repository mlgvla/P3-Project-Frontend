import React from "react";
import { useState } from "react";

function EditReviewForm({ review, setShowEditForm }) {
  const [formData, setFormData] = useState({
    user_id: 1,
    clothing_id: parseInt(review.id),
    comment: review.comment,
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reviews/" + review.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((editedReview) => console.log(editedReview));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          value={formData.comment}
          type="text"
          placeholder="Add Review"
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditReviewForm;
