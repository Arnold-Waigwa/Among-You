import React, { useState, useEffect } from "react";
import "./Create.css";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [crewMate, setCrewMate] = useState({ name: "", speed: "", color: "" });

  // Fetch the existing crewmate data
  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("Crewmate")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching crewmate:", error);
      } else if (data) {
        setCrewMate({
          name: data.Name,
          speed: data.Speed,
          color: data.Color,
        });
      }
    };

    fetchCrewmate();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrewMate({ ...crewMate, [name]: value });
  };

  const updateCrewmate = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("Crewmate")
      .update({
        Name: crewMate.name,
        Speed: crewMate.speed,
        Color: crewMate.color,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating crewmate:", error);
    } else {
      window.location = "/";
    }
  };

  return (
    <div>
      <h1>Update Your Crewmate</h1>
      <img src="/public/assets/Home1.png" alt="Image of Among You" />
      <br />
      <h3>Current Crew Mate Info:</h3>
      <p>
        Name: {crewMate.name}, Speed: {crewMate.speed}, Color: {crewMate.color}
      </p>
      <form className="form-container" onSubmit={updateCrewmate}>
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
            <h3>Speed (mph):</h3>
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
        <br />
        <button type="submit">Update Crewmate</button>
      </form>
    </div>
  );
};

export default Edit;
