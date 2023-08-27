import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Button text="Learn More" />
      <Button text="View More" />
    </div>
  );
};

export default Home;
