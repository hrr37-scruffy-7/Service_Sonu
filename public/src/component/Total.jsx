import React from 'react';

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="total-container">
        <div className="total">
          <div id="total-name">Total</div> <div id="total-price">$149.66</div>
        </div>
        <div>
          <div id="taxes">Includes taxes and fees</div>
          <a id="view-details" href="#">
            View details
          </a>
        </div>
      </div>
    );
  }
}

export default Total;