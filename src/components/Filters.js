import React, { useState } from "react";
import "../styles/Filters.css";

const Filters = () => {
  const [openSection, setOpenSection] = useState("IDEAL_FOR");
  const [selected, setSelected] = useState({
    men: false,
    women: false,
    kids: false,
  });

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleSelect = (key) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const unselectAll = () => {
    setSelected({ men: false, women: false, kids: false });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-item">
        <label>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

      <hr />

      {/* IDEAL FOR */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("IDEAL_FOR")}
        >
          <span>IDEAL FOR</span>
          <span>{openSection === "IDEAL_FOR" ? "▲" : "▼"}</span>
        </div>

        {openSection === "IDEAL_FOR" && (
          <div className="filter-content">
            <p>All</p>
            <p className="unselect" onClick={unselectAll}>
              Unselect all
            </p>
            <div className="option">
              <label>
                <input
                  type="checkbox"
                  checked={selected.men}
                  onChange={() => handleSelect("men")}
                />
                Men
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.women}
                  onChange={() => handleSelect("women")}
                />{" "}
                Women
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selected.kids}
                  onChange={() => handleSelect("kids")}
                />{" "}
                Baby & Kids
              </label>
            </div>
          </div>
        )}
      </div>

      <hr />

      {[
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN",
      ].map((section) => (
        <div key={section} className="filter-section">
          <div className="filter-header" onClick={() => toggleSection(section)}>
            <span>{section}</span>
            <span>{openSection === section ? "▲" : "▼"}</span>
          </div>
          {openSection === section && <p className="filter-content">All</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Filters;
