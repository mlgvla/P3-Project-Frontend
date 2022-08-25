import React from "react";

function Review({ review }) {
  const comment = review.comment;
  const user = review.user.name;

  return (
    <div>
      <div>{user}</div>
      <div>{comment}</div>
    </div>
  );
}

export default Review;
