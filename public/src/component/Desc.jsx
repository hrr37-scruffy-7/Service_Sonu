import React from 'react';

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
      <div className="desc-wrapper">
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

export default Desc;