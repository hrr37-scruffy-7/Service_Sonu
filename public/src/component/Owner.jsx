import React from 'react';

class Owner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="owner-container">
      <div className="owner-details-mini__avatar"></div>
        <div className="owner-details">
        <strong className="owner-name">Diana Moya</strong>

            <a className="owner-link" href="#">
              Ask Owner a Question
            </a>
        </div>
      </div>
    );
  }
}




export default Owner;