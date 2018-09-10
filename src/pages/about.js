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
        <div className="secondary__link-wrapper">
        <Link className="link" to="/">Back to Home</Link>
        </div>
        <div className="watermark">
          <h2 className="secondary__watermark"> About </h2>
          <div className="secondary__watermark-shadow">a</div>
        </div>
        <p className="secondary__subtitle">
        Subtitle lalalalallaa
        </p>
        <p className="secondary__info">
        lalaalla information that i dont want to write
        </p>
      </div>
    </div>
  </div>
  );
 }
}

export default About;
