import React, { useState, useMemo } from "react";
import "../styles/Home.css";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

const Home = ({ products }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");

  const options = [
    { value: "RECOMMENDED", label: "RECOMMENDED" },
    { value: "NEWEST_FIRST", label: "NEWEST FIRST" },
    { value: "POPULAR", label: "POPULAR" },
    { value: "PRICE_HIGH_TO_LOW", label: "PRICE: HIGH TO LOW" },
    { value: "PRICE_LOW_TO_HIGH", label: "PRICE: LOW TO HIGH" },
  ];

  // ✅ Memoized sorting logic
  const sortedProducts = useMemo(() => {
    if (!products) return [];

    let sorted = [...products];
    switch (sortOption) {
      case "PRICE_HIGH_TO_LOW":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "PRICE_LOW_TO_HIGH":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "POPULAR":
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "NEWEST_FIRST":
        sorted.reverse();
        break;
      default:
        sorted = [...products];
    }
    return sorted;
  }, [products, sortOption]);

  return (
    <div className="home">
      <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      <div className="filter-bar">
        <div className="filter-left">
          <p className="item-count">{sortedProducts.length} ITEMS</p>
          <button
            className="filter-btn"
            onClick={() => setIsFilterOpen((prev) => !prev)}
          >
            {isFilterOpen ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>
        </div>

        <select
          className="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="content">
        {isFilterOpen && <Filters />}
        <ProductGrid products={sortedProducts} />
      </div>
    </div>
  );
};

export default Home;
