import React, { useState } from "react";
import "./Create.css";
import { supabase } from "../client";

const Create = () => {
  const [crewMate, setCrewMate] = useState({ name: "", speed: "", color: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrewMate({ ...crewMate, [name]: value });
  };

  const createCrewmate = async (event) => {
    event.preventDefault();

    await supabase
      .from("Crewmate")
      .insert({
        Name: crewMate.name,
        Speed: crewMate.speed,
        Color: crewMate.color,
      })
      .select();

    window.location = "/";
  };

  return (
    <div>
      <h1>Create a new Crewmate</h1>
      <img src="/public/assets/Home1.png" alt="Image of Among You" />
      <br />
      <form className="form-container">
        <div className="mini-container">
          <label>
            <h3>Name:</h3>
          </label>
          <input
            type="text"
            name="name"
            value={crewMate.name}
            placeholder="Enter a crewmate's name"
            onChange={handleChange}
          />
        </div>
        <div className="mini-container">
          <label>
            <h3>Speed:</h3>
          </label>
          <input
            type="text"
            name="speed"
            value={crewMate.speed}
            placeholder="Enter speed in mph"
            onChange={handleChange}
          />
        </div>
        <div className="mini-container">
          <label>
            <h3>Color:</h3>
          </label>
          <select name="color" value={crewMate.color} onChange={handleChange}>
            <option value="">Select a color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Purple">Purple</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Orange">Orange</option>
            <option value="Pink">Pink</option>
          </select>
        </div>
      </form>
      <br />
      <button onClick={createCrewmate}>Create Crewmate</button>
    </div>
  );
};

export default Create;
