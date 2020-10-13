import React from 'react'
import Hero from "../components /Hero";
import Banner from "../components /Banner";
import { Link } from "react-router-dom";

 


const BookingForm = () => {
    return (
        <>
        <Hero hero="roomsHero">
      <Banner tittle="Book Your Room Now">
        <Link to="/home" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
    <h3 className="book">Fill the Form To Book Your Room</h3>


<form className="bookingform">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          // value={value}
          id="NameInput"
          // onChange={e => setValue(e.target.value)}
         
          required
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          //value={date}
          id="EmailInput"
          //onChange={e => setDate(e.target.value)}
          required
        />
        <label htmlFor="Phone number">Phone Number</label>
        <input
          type="Number"
          name="phone number"
          placeholder="Enter Phone number"
          //value={date}
          id="PhoneInput"
          //onChange={e => setDate(e.target.value)}
          required
        />
        <label htmlFor="Passport">Passport Number</label>
        <input
          type="number"
          name="passport"
          placeholder="Enter PassportNumber"
          //value={date}
          id="PassportinputInput"
          //onChange={e => setDate(e.target.value)}
          required
        />
<label htmlFor="RoomType">select Room Type:
              <select multiple={true}>
              {/* //  value={this.state.value}
              //   onChange={this.handleChange}> */}
                <option value="DELUX DOUBLE ROOM">DELUX DOUBLE ROOM</option>
                <option value="DELUX SINGLE ROOM">DELUX SINGLE ROOM</option>
                <option value="LUXURY SINGLE ROOM">LUXURY SINGLE ROOM</option>
                <option value="UXURY DOUBLE ROOM">LUXURY DOUBLE ROOM</option>
              </select>
            </label>
       

   
       
       
       
        <button type="submit" className="btn-info-form"> Submit</button>
      </form>







      </>
    )
}

export default BookingForm