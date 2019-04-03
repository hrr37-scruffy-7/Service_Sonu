import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span className="btn__label">Book Now</span>
        <div className="book-cancel">
          <span>Free Cancellation</span> until 4/1/2019
        </div>
      </div>
    );
  }
}

export default Book;