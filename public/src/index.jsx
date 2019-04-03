import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Price from "./component/Price.jsx";
import Desc from "./component/Desc.jsx";
import Owner from "./component/Owner.jsx";
import PropertyNumb from "./component/PropertyNumb.jsx";
import Book from "./component/Book.jsx";
import Total from "./component/Total.jsx";

class Social extends React.Component {
  render() {
    return (
      <div className="social-wrapper">
        <div className="social-btn">
          <svg
            className="SVG_SOCIAL"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              strokeLinecap="round"
              stroke="black"
              strokeLinejoin="round"
            >
              <path d="M13.7 9.9v3c0 .6-.5 1-1.2 1h-9c-.7 0-1.2-.4-1.2-1v-3M3.9 5.5L8 2l4.1 3.5M8 2.6v7.6" />
            </g>
          </svg>
        </div>
        <div className="social-btn">
          <svg
            id="svg-heart"
            className="SVG_SOCIAL"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="react-trip-board-button__heart-core__heart-icon unhearted react-trip-board-button__heart-core-bg"
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 3.98S9.13 2 11.5 2C13.57 2 15 3.7 15 5.73c0 2.86-2.98 4.6-7 8.27-4.02-3.67-7-5.41-7-8.27C1 3.7 2.43 2 4.5 2 6.88 2 8 3.98 8 3.98z"
            />
            <path
              className="react-trip-board-button__heart-core__heart-icon unhearted"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 3.98S9.13 2 11.5 2C13.57 2 15 3.7 15 5.73c0 2.86-2.98 4.6-7 8.27-4.02-3.67-7-5.41-7-8.27C1 3.7 2.43 2 4.5 2 6.88 2 8 3.98 8 3.98z"
            />
          </svg>
        </div>
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
        <Social />
        <Desc rating={this.state.rating} />
        <Price />
        <Total />
        <Book />
        <Owner />
        <PropertyNumb />
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
      <div>
        <RightBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
