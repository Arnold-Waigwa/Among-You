import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Among You!</h1>
      <h3>
        Here is where you can create your very own set of crewmates before
        sending them off into space!
      </h3>
      <img
        className="welcome-images"
        src="/public/assets/Home1.png"
        alt="Picture of Among you 1"
      />
      <br />
      <img
        className="welcome-images"
        src="/public/assets/Home2.png"
        alt="Picture of Among you 1"
      />
    </div>
  );
};

export default Home;
