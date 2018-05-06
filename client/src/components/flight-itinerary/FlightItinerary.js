import React from 'react';
import './FlightItinerary.scss';
import FlightLeg from '../flight-leg';
import FlightBooking from "../flight-booking";

const FlightItinerary = (props) => (
  <li className="flight-itinerary">
    <div>
      <article className="flight-itinerary__card">
        <FlightLeg leg={props.itinerary.OutboundLeg} />
        <FlightLeg leg={props.itinerary.InboundLeg} />
        <FlightBooking item={props.itinerary.PriceOption} />
      </article>
    </div>
  </li>
);

export default FlightItinerary;
