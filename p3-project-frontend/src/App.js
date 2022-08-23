import "./App.css";
import Clothing from "./components/Clothing";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";

function App() {
  const [clothing, setClothing] = useState([]);

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

  return (
    <div>
      <NavBar />
      <Clothing clothing={clothing} onClothingClick={HandleClothingClick} />
    </div>
  );
}

export default App;
