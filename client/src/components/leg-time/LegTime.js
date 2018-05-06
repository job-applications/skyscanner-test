import React from 'react';
import SkyscannerTimePaser from "../../classes/skyscanner-time-parser";

const LegTime = (props) => (
  <span className={`leg-time ${ props.className || '' }`}>{SkyscannerTimePaser.getTimeFromString(props.datetime)}</span>
);

export default LegTime;
