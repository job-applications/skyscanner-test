import React from 'react';
import './SearchHeader.scss';

const SearchHeader = (props) => (
  <header className='search-criteria'>
    <div className="journey-details">
      <span className="origin">{props.criteria.fromPlace.title}</span>
      <span className="travelling">
        <span className="icon" aria-hidden="true"></span>
        <span className="icon-description">{ " to " }</span>
      </span>
      <span className="destination">{props.criteria.toPlace.title}</span>
    </div>
    <div className="passenger-details">
      <span className="passenger-ages">{props.criteria.adults} travellers</span>,
      <span className="passenger-class">{props.criteria.class}</span>
    </div>
  </header>
);

export default SearchHeader;
