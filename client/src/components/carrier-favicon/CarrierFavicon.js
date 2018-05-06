import React, {Component} from 'react';

const CARRIER_FAVICON_BASE_URL = "https://logos.skyscnr.com/images/airlines/favicon/";
const CARRIER_FAVICON_EXTENSION = ".png";
const REMAPPED_ICON_CODES = {
  'EZY': 'EZ',
};

class CarrierFavicon extends Component {
  constructor(props){
    super(props);
    this.name = (this.props.carrier || {}).Name || '';
    this.code = (this.props.carrier || {}).DisplayCode || '';
  }

  getFaviconSrc() {
    const icon = REMAPPED_ICON_CODES[this.code] || this.code;
    return CARRIER_FAVICON_BASE_URL + icon + CARRIER_FAVICON_EXTENSION;
  }

  render() {
    return (
      <img src={this.getFaviconSrc()} alt={this.name} className={`carrier-favicon ${ this.props.className || ''}`} />
    );
  }
}

export default CarrierFavicon;
