import React from 'react';
import './FlightBooking.scss';
import DisplayPrice from '../display-price';

const FlightBooking = (props) => {
  const agentName = (props.item.Agents || [])[0];

  return (
    <div className="flight-booking">
      <div className="flight-booking__wrapper">
        <div className="flight-booking__price">
          <DisplayPrice amount={props.item.Price} />
        </div>
        <div className="flight-booking__agent">{agentName}</div>
      </div>
      <div className=" flight-booking__wrapper_align_bottom flight-booking__wrapper_align_right">
        <div className="flight-booking__button">Select</div>
      </div>
    </div>
  );
};


export default FlightBooking;
