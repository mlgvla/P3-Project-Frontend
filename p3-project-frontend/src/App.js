import "./App.css";
import Clothing from "./components/Clothing";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ClothingDetails from "./components/ClothingDetails";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [clothing, setClothing] = useState([]);
  const [featuredClothing, setFeaturedClothing] = useState([]);

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
  }

  return (
    <div id="container">
      <NavBar />
      <Switch>
        <Route exact path="/details">
          <ClothingDetails featuredClothing={featuredClothing} />
        </Route>
        <Route exact path="/">
          <Clothing
            clothing={clothing}
            onClothingCardClick={handleClothingCardClick}
          />
        </Route>
        <Route exact path="/cart">
          <ShoppingCart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
