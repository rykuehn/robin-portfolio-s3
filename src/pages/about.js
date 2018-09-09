import React, { Component } from 'react';
import Link from 'gatsby-link';

class About extends Component {
 render() {
   return (
     <div className="site__wrapper">
      <div className="index__wrapper">
        <div className="index__left">
          <div className="index__left-image">
          </div>
        </div>
        <div className="index__right">
        <div className="link-wrapper">
        <Link className="link" to="/">Back to Home</Link>
        </div>
          <div className="index__right-logo">
            <p> RL </p>
          </div>
          <div className="index__right-description">
            <p> 
              Hey there! About page
              </p>
          </div>
        </div>
      </div>
    </div>
    );
 }
}

export default About;
