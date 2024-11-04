import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Card from "../components/Card";
import { supabase } from "../client";

const Gallery = () => {
  const [mates, setMates] = useState([]);

  //get mates
  useEffect(() => {
    const fetchMates = async () => {
      const { data } = await supabase.from("Crewmate").select();
      setMates(data);
    };
    fetchMates();
  }, []);

  return (
    <div>
      <h1>Your Crewmate Collection!</h1>
      <div className="crewmate-container">
        {mates && mates.length > 0 ? (
          mates.map((mate, index) => (
            <Card
              id={mate.id}
              Name={mate.Name}
              Speed={mate.Speed}
              Color={mate.Color}
            ></Card>
          ))
        ) : (
          <h2>No Mates Yet 😞</h2>
        )}
      </div>
    </div>
  );
};

export default Gallery;
