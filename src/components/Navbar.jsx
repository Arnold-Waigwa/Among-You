import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/create">
        <button>Create a Crewmate!</button>
      </Link>
      <Link to="/gallery">
        <button>Crewmate Gallery</button>
      </Link>
    </nav>
  );
};

export default Navbar;
