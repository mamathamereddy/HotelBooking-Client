import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function RoomWithId() {
  const { slug } = useParams();
  console.log(slug);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hotel-bookingapp.herokuapp.com/rooms/${slug}`)
      .then((res) => setData(res.data))

      .catch((error) => console.log(error));
    console.log(data);
  });

  return (
    <>
      <section className="single-room">
        <div className="single-room-images">
          <img src={data.image} alt="room" />
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>{data.roomtype}</h3>
            <p>{data.description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : DKK {data.price}</h6>
            <h6>Rooms :{data.rooms}</h6>
            <h6>beds : {data.beds}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {data.utilitise
            ? data.utilitise.map((item, index) => <li key={index}> {item}</li>)
            : null}
        </ul>
      </section>
      <Link to="/bookingForm" className="btn-info ">
        BOOK NOW
      </Link>
    </>
  );
}

export default RoomWithId;
