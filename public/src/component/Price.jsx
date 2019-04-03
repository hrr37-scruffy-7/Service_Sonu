import React from 'react';

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

export default Price;