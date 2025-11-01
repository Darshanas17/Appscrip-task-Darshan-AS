import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <Header />
      <Home products={products} />
    </div>
  );
};

export default App;
