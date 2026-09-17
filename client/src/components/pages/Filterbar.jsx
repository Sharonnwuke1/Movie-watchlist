import React, { useState } from "react";
import "./Filterbar.css";

function Filterbar() {
  const [activeFilter, setActiveFilter] = useState("All 6");

  const filters = [
    "All 6",
    "Want 2",
    "Watching 1",
    "Watched 3",
    "Movies 6",
    "Anime 0"
  ];

  return (
    <div className="filterbar">
      <div className="filter-options">
        {filters.map((filter) => (
          <span
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>

      
            <div className="sort-options">

        <select>
          <option>Date Added</option>
          <option>Title</option>
          <option>Rating</option>
          <option>Year</option>
        </select>
      </div>
    </div>
  );
}

export default Filterbar;
