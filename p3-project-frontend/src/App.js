import "./App.css";
import Clothing from "./components/Clothing";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ClothingDetails from "./components/ClothingDetails";
import ShoppingCart from "./components/ShoppingCart";
import AddReviewForm from "./components/AddReviewForm";

function App() {
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/clothes")
      .then((res) => res.json())
      .then((data) => {
        setClothing(data);
      });
  }, []);

  return (
    <div id="container">
      <NavBar />
      <Switch>
        <Route exact path="/clothes/:id">
          <ClothingDetails />
        </Route>
        <Route exact path="/">
          <Clothing clothing={clothing} />
        </Route>
        <Route exact path="/cart">
          <ShoppingCart />
        </Route>
        <Route exact path="/addreview">
          <AddReviewForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
