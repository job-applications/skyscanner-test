import React, {Component} from 'react';

const STOPS_DIRECT_TERM = "Direct";
const STOPS_SINGLUAR_TERM = "stop";
const STOPS_PLURAL_TERM = "stops";


class LegStops extends Component {

  constructor(props) {
    super(props);
    this.stops = this.calcStops();
    this.isDirect = this.stops  < 1;
  }

  calcStops(){
    return (this.props.segments || []).length - 1;
  }

  getText() {
    if ( this.stops > 1 ) {
      return this.stops + ' ' + STOPS_PLURAL_TERM;
    }
    else if ( this.stops > 0 ){
      return this.stops + ' ' + STOPS_SINGLUAR_TERM;
    }
    else {
      return STOPS_DIRECT_TERM;
    }
  }

  render() {
    const text = this.getText();
    return <span className={`leg-stops ${ this.props.className || '' } ${ this.isDirect ? 'direct' : 'indirect' }`}>{text}</span>;
  }
}

export default LegStops;
