import React from 'react';
import './SearchLoading.scss';
import { BpkLargeSpinner, SPINNER_TYPES } from 'bpk-component-spinner';

const SearchLoading = (props) => {
  if ( !props.show ){
    return null;
  }

  return (
    <div className={`search-loading ${ props.className || ''}`}>
      <div className="search-loading__spinner"><BpkLargeSpinner type={SPINNER_TYPES.primary} /></div>
      <div className='search-loading__message'>Searching</div>
    </div>
  );
};

export default SearchLoading;
