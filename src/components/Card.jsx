import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, Name, Speed, Color }) => {
  return (
    <div className="crewmate-card">
      <img className="card-img" src="/public/assets/Home3.webp" alt="" />
      <h2 className="title">CrewMate: {Name}</h2>
      <h2 className="title">CrewMate Speed (mph): {Speed}</h2>
      <h2 className="title">CrewMate Color: {Color}</h2>
      <br />
      <Link to={`/Edit/${id}`}>
        <button>Edit Crewmate</button>
      </Link>
    </div>
  );
};

export default Card;
