import React from 'react';
import './SearchResults.scss';
import SearchHeader from '../search-header';
import SearchControls from "../search-controls";
import SearchLoading from "../search-loading";
import BpkBannerAlert, { ALERT_TYPES } from 'bpk-component-banner-alert';
import FlightItineraries from "../flight-itineraries";

const SearchResults = (props) => {
  const resultCount = (props.itineraries || []).length;
  const showSearch = !(props.isLoading || props.hasErrored);
  const itineraries = showSearch && resultCount ? <FlightItineraries itineraries={props.itineraries}/> : '';

  return (
    <section className="search-results">
      <SearchHeader criteria={props.criteria} />
      <SearchControls show={showSearch}/>
      <div className="search-results__content">
        <BpkBannerAlert
          show={props.hasErrored}
          message="Unable to load search results."
          type={ALERT_TYPES.ERROR}
        />
        <BpkBannerAlert
          show={showSearch && !resultCount}
          message="No results found for this search criteria."
          type={ALERT_TYPES.NEUTRAL}
        />
        <SearchLoading message='Searching' show={props.isLoading} />
        {itineraries}
      </div>
    </section>
  );
};

export default SearchResults;
