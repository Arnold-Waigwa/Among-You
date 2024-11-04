import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ Name, Speed, Color }) => {
  return (
    <div className="crewmate-card">
      <h2 className="title">CrewMate:{Name}</h2>
      <h2 className="title">CrewMate Speed:{Speed}</h2>
      <h2 className="title">CrewMate Color:{Color}</h2>
      <br />
      <button>Edit Crewmate</button>
    </div>
  );
};

export default Card;
