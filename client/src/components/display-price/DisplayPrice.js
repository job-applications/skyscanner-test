import React, {Component} from 'react';

class DisplayPrice extends Component {
  getRoundedPrice(){
    return Math.ceil(this.props.amount);
  }

  render() {
    return (
      <span className="display-price">
        <span className="display-price__currency">&pound;</span>
        <span className="display-price__amount">{this.getRoundedPrice()}</span>
      </span>
    )
  }
}

export default DisplayPrice;
