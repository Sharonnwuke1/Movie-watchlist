import React from "react";
import { FaFilm } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-content">
        <FaFilm className="navbar-icon" />
        <h1>Watchlist</h1>
      </div>

      <input
        className="navbar-input"
        type="text"
        placeholder="Search your list..."
      />

      <button className="navbar-button">
        + Browse & Add
      </button>

    </nav>
  );
}

export default Navbar;