import React, { Component } from 'react';
import './Results.scss';

class Results extends Component {
  render() {
    if ( this.props.isLoading ){
      return <main className="results-loading">Your results are loading...</main>
    }
    else if ( this.props.results.success ){
      <main className="results">Here are your results</main>
    }
    return (
      <main className="results">We were unable to load your results. Check the server is running.</main>
    )
  }
}

export default Results;
