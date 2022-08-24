import "./App.css";
import Clothing from "./components/Clothing";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ClothingDetails from "./components/ClothingDetails";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [clothing, setClothing] = useState([]);
  const [showClothingDetails, setShowClothingDetails] = useState(false);
  const [featuredClothing, setFeaturedClothing] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/clothes")
      .then((res) => res.json())
      .then((data) => {
        setClothing(data);
      });
  }, []);

  function handleClothingCardClick(featuredClothing) {
    fetch(`http://localhost:9292/clothes/${featuredClothing.id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedClothing(data);
        console.log(data);
      });
    setShowClothingDetails(true);
  }

  function handleCartClick() {
    setShowShoppingCart(!showShoppingCart);
    setFeaturedClothing(!featuredClothing);
  }

  function handleGoBack() {
    setShowClothingDetails((showClothingDetails) => !showClothingDetails);
  }

  function handleHomeClick() {
    setShowClothingDetails(false);
  }

  return (
    <div id="container">
      <NavBar onHomeClick={handleHomeClick} onCartClick={handleCartClick} />
      <Switch>
        <Route exact path="/details">
          {showClothingDetails ? (
            <ClothingDetails
              featuredClothing={featuredClothing}
              showClothingDetails={showClothingDetails}
              onGoBack={handleGoBack}
            />
          ) : (
            <Clothing
              clothing={clothing}
              onClothingCardClick={handleClothingCardClick}
            />
          )}
        </Route>
        <Route exact path="/cart">
          {showShoppingCart ? <ShoppingCart /> : null}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
