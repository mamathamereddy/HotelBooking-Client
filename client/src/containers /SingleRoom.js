import React from "react";
import defaultBcg from "../images/room-3.jpeg";
import Hero from "../components /Hero";
import Banner from "../components /Banner";
import { Link } from "react-router-dom";
import RoomWithId from "../components /RoomWithId";

const SingleRoom = () => {
  return (
    <>
      <Hero hero="singleHero">
        <Banner tittle="">
          <Link to="/home" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <RoomWithId />
    </>
  );
};

export default SingleRoom;
