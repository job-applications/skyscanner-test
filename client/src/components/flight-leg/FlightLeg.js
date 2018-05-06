import React from 'react';
import './FlightLeg.scss';
import CarrierFavicon from "../carrier-favicon";
import LegTime from "../leg-time";
import LegCity from "../leg-city";
import LegDuration from "../leg-duration";
import LegStops from "../leg-stops";


const FlightLeg = (props) => (
  <div className="flight-leg">
    <div className="flight-leg__info">
      <CarrierFavicon carrier={props.leg.Carrier} className="flight-leg_display_block flight-leg__favicon" />
    </div>
    <div className="flight-leg__info">
      <LegTime datetime={props.leg.Departure} className="flight-leg__fact flight-leg__datetime" />
      <LegCity location={props.leg.Origin} className="flight-leg__fact" />
    </div>
    <div className="flight-leg__info flight-leg__info-journey-icon">
      <span className="icon" aria-hidden="true"></span>
      <span className="icon-description">{ " to " }</span>
    </div>
    <div className="flight-leg__info">
      <LegTime datetime={props.leg.Arrival} className="flight-leg__fact flight-leg__datetime"  />
      <LegCity location={props.leg.Destination} className="flight-leg__fact" />
    </div>
    <div className="flight-leg__info flight-leg__info_font-size_sm flight-leg__info_align_right">
      <LegDuration minutes={props.leg.Duration} className="flight-leg__fact" />
      <LegStops segments={props.leg.Segments} className="flight-leg__fact flight-leg__stops" />
    </div>
  </div>
);

export default FlightLeg;
