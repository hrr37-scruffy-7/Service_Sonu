import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Price = props => {
  return (
    <div className="price-container">
      <svg id="svg-instant-book" viewBox="0 0 7 10" width="25px" height="50px">
        <g
          id="-Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Badges-/SERP/-m-icon"
            transform="translate(-10.000000, -6.000000)"
            fill="#353E44"
          >
            <g
              id="Badges/Icons/instant"
              transform="translate(6.000000, 4.000000)"
            >
              <path
                d="M6.41143603,7.55274735 L6.06932868,11.4014551 C6.02018525,11.9543187 6.25498606,12.0592039 6.60443896,11.6223878 L10.2060102,7.12042381 C10.5506869,6.68957796 10.384998,6.34030838 9.83026135,6.34030838 L7.97413515,6.34030838 L8.31624251,2.49160068 C8.36538594,1.93873703 8.13058513,1.83385179 7.78113222,2.27066792 L4.17956102,6.77263193 C3.83488434,7.20347778 4.00057324,7.55274735 4.55530984,7.55274735 L6.41143603,7.55274735 Z"
                id="Combined-Shape"
              />
            </g>
          </g>
        </g>
      </svg>
      <span className="price">$52</span> per night
      <div id="available-dates">Your dates are available</div>
    </div>
  );
};

class Desc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateStars(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i.toString()}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            strokeWidth="none"
            fill="currentColor"
            vectorEffect="non-scaling-stroke"
            d="M11.7 18l-5.5 3.8A.8.8 0 0 1 5 21l1.8-6c0-.2 0-.4-.2-.5L2.2 9.9a.7.7 0 0 1 .5-1.2l5.8-.6c.2 0 .4 0 .4-.3l2.4-5.3a.8.8 0 0 1 1.4 0l2.4 5.3c0 .2.2.3.4.3l5.8.6a.7.7 0 0 1 .5 1.2l-4.5 4.6v.5l1.7 6a.8.8 0 0 1-1.2.8L12.3 18a.5.5 0 0 0-.6 0z"
          />
        </svg>
      );
    }
    return stars;
  }

  render() {
    return (
      <div>
        <h3>Private Cozy Room in fantastic neighborhood!</h3>
        <div>
          {this.generateStars(this.props.rating)}
          <span className="review-number">13 Reviews</span>
        </div>
        <div className="rating-caption">Wonderful 4.8/5</div>
      </div>
    );
  }
}

class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    };
  }

  // fetchData() {
  //   fetch('/properties/:id')
  // }
  //res.json

  render() {
    return (
      <div className="side-container">
        <Desc rating={this.state.rating} />
        <Price />
        <Total />
        <Book />
      </div>
    );
  }
}

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span className="btn__label">Book Now</span>
        <div className='book-cancel'>
        <span>Free Cancellation</span> until 4/1/2019
        </div>
      </div>
    );
  }
}

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="total-container">
        <div className="total">
          <div id='total-name'>Total</div> <div id='total-price'>$149.66</div>
        </div>
        <div>
          <div id='taxes'>
            Includes taxes and fees
            </div>
            <a id='view-details' href="#">View details</a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={RightBar} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
