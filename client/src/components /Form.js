import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Form,Button} from 'react-bootstrap';
 


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
    <Form className="bookingform">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Enter phone number" />
    <Form.Label>Passport Number</Form.Label>
    <Form.Control type="number" placeholder="Enter passport number" />
  </Form.Group>
  <Form.Group>
      <Form.Label>Room Type</Form.Label>
      <Form.Control multiple as="select" custom>
      <option >LUXURY DOUBLE ROOM</option>
      <option >DELUX DOUBLE ROOM</option>
      <option >LUXURY SINGLE ROOM</option>
      <option >DELUX SINGLE ROOM</option>
    </Form.Control>
  </Form.Group>
    

  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
      </>
    )
}

export default BookingForm