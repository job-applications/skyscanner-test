import React from 'react';

const LegCity = (props) => (
  <span className={`leg-city ${ props.className || '' }`} title={props.location.Name}>{props.location.Code}</span>
);

export default LegCity;
