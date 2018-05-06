import React, { Component } from 'react';
import './App.scss';

import SkyscannerSearch from './classes/skyscanner-search';
import SkyscannerTimeParser from './classes/skyscanner-time-parser';
import TopNav from './components/topnav';
import SearchResults from './components/search-results';

const nextMonday = SkyscannerTimeParser.getNextMonday();
const dayFollowingMonday = SkyscannerTimeParser.getFollowingDay(nextMonday);

const searchCriteria = {
  adults: 2,
  class: "economy",
  toPlace: {title: "LON", value: "LOND-Sky"},
  toDate:  SkyscannerTimeParser.getDateInSearchFormat(dayFollowingMonday),
  fromPlace: {title: "EDI", value: "EDI-Sky"},
  fromDate: SkyscannerTimeParser.getDateInSearchFormat(nextMonday)
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasErrored: false,
      criteria: searchCriteria,
      itineraries: [],
    };
  }

  componentWillMount() {
    this.dataSource();
  }

  dataSource() {
    SkyscannerSearch.perform(this.state.criteria).then((result) => {
      this.setState({ itineraries: result.data, hasErrored: !result.success, isLoading: false });
    });
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <SearchResults isLoading={this.state.isLoading} hasErrored={this.state.hasErrored} criteria={this.state.criteria} itineraries={this.state.itineraries}/>
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`

export default App;