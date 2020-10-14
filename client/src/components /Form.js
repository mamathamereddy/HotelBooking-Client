import React, { useState } from "react";
import Hero from "../components /Hero";
import Banner from "../components /Banner";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [roombooking, setRoombooking] = useState(false);
  const [customer, setCustomer] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    passportNumber: "",
  });
  const handleCustomer = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };
  const handleRoom = (e) => {
    setRooms([...rooms, e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      customer,
      rooms,
    };
    try {
      const infoToBook = await fetch(
        "https://hotel-bookingapp.herokuapp.com/customers/addNewCustomer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const response = await infoToBook.status;
      setRoombooking(true);
      return response === 400
        ? setError("please check the input the fields correctly")
        : null;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <Hero hero="roomsHero">
        <Banner tittle="Book Your Room Now">
          <Link to="/home" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>

      {roombooking ? (
        <h5>
          {error
            ? error
            : "Booking successful "}
        </h5>
      ) : (
        <>
          <h3 className="book">Fill the Form To Book Your Room</h3>
          <form className="bookingform" onSubmit={handleSubmit}>
            <label htmlFor="customerName">customerName</label>
            <input
              type="text"
              name="customerName"
              placeholder="Enter Name"
              value={customer.customerName}
              id="NameInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={customer.email}
              id="EmailInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="phoneNumber">phoneNumber</label>
            <input
              type="Number"
              name="phoneNumber"
              placeholder="Enter Phone number"
              value={customer.phoneNumber}
              id="PhoneInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="passportNumber">passportNumber</label>
            <input
              type="number"
              name="passportNumber"
              placeholder="Enter PassportNumber"
              value={customer.passportNumber}
              id="PassportInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="RoomType">
              select Room Type:
              <select multiple={true} value={rooms} onChange={handleRoom}>
                <option value="5f8459c2ae9d2e0a63d88cf7">
                  DELUX DOUBLE ROOM
                </option>
                <option value="5f860bec05d693049ad6f7e6">
                  DELUX SINGLE ROOM
                </option>
                <option value="5f845542ae9d2e0a63d88cf6">
                  LUXURY SINGLE ROOM
                </option>
                <option value="5f845a23ae9d2e0a63d88cf8">
                  LUXURY DOUBLE ROOM
                </option>
              </select>
            </label>

            <button type="submit" className="btn-info-form">
              {" "}
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default BookingForm;
