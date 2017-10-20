import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          <a href="https://github.com/iorrah/google-weather" target="_blank">
            Fork this project on GitHub
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
