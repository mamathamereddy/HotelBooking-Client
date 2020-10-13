import React from "react";
import Hero from "../components /Hero";
import Banner from "../components /Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner tittle="Our Rooms">
        <Link to="/home" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
