import React, { Component } from 'react';
import Link from 'gatsby-link';
import fortunes from './fortunes.json';

class IndexPage extends Component {
 render() {
   return (
     <div className="site__panel-container">
      <div className="site__left-panel">
        <h1>Hey there!</h1>
        <h3>I'm Robin.</h3>
        <h3>Software Engineer. Granola Grazer.</h3>
      </div>
      <div className="site__right-panel">
        <div className="site__fast-facts">
          <p>{fortunes[0].fortune.message}</p>
        </div>
        <div className="site__projects"></div>
        <div className="site__contact"></div>
      </div>
    </div>
   );
 }
}

export default IndexPage
