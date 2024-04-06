import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
  return (
    <div>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.SubmitForm}/>
    </div>
  );
}

export default Booking;
