import React, { useState, useEffect } from "react";

function Home() {
  const [home, setHome] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/clothes")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <div>"Test"</div>;
}

export default Home;
