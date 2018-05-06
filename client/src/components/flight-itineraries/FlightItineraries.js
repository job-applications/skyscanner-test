import React, { Component } from 'react';
import './FlightItineraries.scss';
import FlightItinerary from "../flight-itinerary/";
import BpkPagination from 'bpk-component-pagination';

const DEFAULT_PER_PAGE = 10;

class FlightItineraries extends Component {
  constructor(props) {
    console.log("FlightItineraries Initializing...");
    super(props);

    this.itineraries = this.props.itineraries || [];
    this.perPage = this.props.perPage || DEFAULT_PER_PAGE;

    this.state = {
      selectedPageIndex: 0,
      pageCount: 0,
      itineraryCount: 0,
      itineraries: [],
    };
  }

  componentWillMount(){
    this.updateItineraryState(this.state.selectedPageIndex);
  }

  // changes from the outside
  componentWillReceiveProps(nextProps) {
    console.log("Properties updating...", nextProps);

    const newItinerary = nextProps.itineraries;
    if (this.itineraries !== newItinerary) {
      this.itineraries = newItinerary || [];
      this.updateItineraryState(this.state.selectedPageIndex);
    }
  }

  updateItineraryState(pageIndex){
    const itineraryCount = this.itineraries.length;
    this.setState({
      selectedPageIndex: pageIndex,
      itineraryCount: itineraryCount,
      pageCount: this.getPageCount(itineraryCount),
      itineraries: this.getResultsFromPageIndex(pageIndex)
    });
  }

  getPageCount(count) {
    return Math.ceil(count / this.perPage);
  }

  getResultsFromPageIndex(pageIndex){
    const start = pageIndex * this.perPage;
    const end = start + this.perPage;
    return this.itineraries.slice(start, end);
  }

  render() {
    const eachItinerary = this.state.itineraries.map(function(item) {
      return (
        <FlightItinerary itinerary={item} key={item.Index}/>
      );
    });

    return (
      <section className="flight-itineraries">
        <ul className="flight-itineraries__list">{eachItinerary}</ul>
        <BpkPagination
          paginationLabel="Result Pages"
          pageCount={this.state.pageCount}
          selectedPageIndex={this.state.selectedPageIndex}
          onPageChange={pageIndex => this.updateItineraryState(pageIndex)}
          previousLabel="previous"
          nextLabel="next"
          visibleRange={3}
          pageLabel={(page, isSelected) => `page ${page}`}
        />
      </section>
    );
  }
}

export default FlightItineraries;
