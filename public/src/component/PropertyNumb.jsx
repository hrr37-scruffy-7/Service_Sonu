import React from 'react';

class PropertyNumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="property-container">
        <span>
          For booking assistance, call Vrbo at <a href="#">888-829-7076</a>
        </span>
        <br />
        <span>
          <strong>Property #</strong> 4924809ha
        </span>
      </div>
    );
  }
}

export default PropertyNumb;