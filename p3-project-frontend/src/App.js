import logo from "./logo.svg";
import "./App.css";
import Clothing from "./components/Clothing";
import { useState, useEffect } from "react";

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
    <div>
      <Clothing clothing={clothing} />
    </div>
  );
}

export default App;
