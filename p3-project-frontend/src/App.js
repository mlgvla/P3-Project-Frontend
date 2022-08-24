import "./App.css";
import Clothing from "./components/Clothing";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import ClothingDetails from "./components/ClothingDetails";

function App() {
  const [clothing, setClothing] = useState([]);
  const [showClothingDetails, setShowClothingDetails] = useState(false);
  const [featuredClothing, setFeaturedClothing] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/clothes")
      .then((res) => res.json())
      .then((data) => {
        setClothing(data);
      });
  }, []);

  function HandleClothingClick(id) {
    fetch(`http://localhost:9292/clothes/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function handleHomeClick() {
    setShowClothingDetails(false);
  }

  function handleClothingCardClick(featuredClothing) {
    setFeaturedClothing(featuredClothing);
    setShowClothingDetails(true);
  }

  function handleGoBack() {
    setShowClothingDetails((showClothingDetails) => !showClothingDetails);
  }

  return (
    <div>
      <NavBar onHomeClick={handleHomeClick} />
      {showClothingDetails ? (
        <ClothingDetails
          featuredClothing={featuredClothing}
          showClothingDetails={showClothingDetails}
          onGoBack={handleGoBack}
        />
      ) : (
        <Clothing
          clothing={clothing}
          onClothingClick={HandleClothingClick}
          onClothingCardClick={handleClothingCardClick}
        />
      )}
    </div>
  );
}

export default App;
