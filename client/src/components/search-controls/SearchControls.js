import React from 'react';
import './SearchControls.scss';

const SearchControls = (props) => {
  if ( !props.show ){
    return null;
  }

  return (
    <div className={`search-controls ${props.className || ''}`}>
      <div className="search-controls__control">
        Filter
      </div>
      <div className="search-controls__control">
        Sort
      </div>
      <div className="search-controls__control search-controls__control_align_right">
        <span className="search-controls__icon"></span>
        Price alerts
      </div>
    </div>
  );
};

export default SearchControls;
