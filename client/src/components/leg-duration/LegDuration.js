import React from 'react';
import SkyscannerTimePaser from "../../classes/skyscanner-time-parser";

const LegDuration = (props) => (
  <span className={`leg-duration ${ props.className }`}>{SkyscannerTimePaser.minutesToTime(props.minutes)}</span>
);

export default LegDuration;
