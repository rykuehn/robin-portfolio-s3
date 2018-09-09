import React, { Component } from 'react';
import Link from 'gatsby-link';
import PageTransition from 'gatsby-plugin-page-transitions';

class IndexPage extends Component {
 render() {
   return (
     <div className="site__wrapper">
      <div className="index__wrapper">
        <PageTransition
        defaultStyle={{
          transition: 'opacity 0.3s;',
          width: '50%',
          height: '100vh',
          margin: '0 auto',
          opacity: '1',
        }}
        transitionStyles={{
          entering: { backgroundColor: 'red' },
          entered: { backgroundColor: 'red' },
          exiting: { opacity: '0' },
        }}
        transitionTime={1000}
      >
        <div className="index__left">
          <div className="index__left-image">
          </div>
        </div>
      </PageTransition>
      <PageTransition
        defaultStyle={{
          transition: 'opacity 0.3s;',
          width: '50%',
          height: '100vh',
          margin: '0 auto',
          opacity: '1',
        }}
        transitionStyles={{
          entering: { backgroundColor: '1' },
          entered: { backgroundColor: '1' },
          exiting: { opacity: '0' },
        }}
        transitionTime={1000}
      >
        <div className="index__right">
          <div className="index__right-logo">
            <p> RL </p>
          </div>
          <div className="index__right-description">
            <p> 
              Hey there! I'm Robin Lawrence, a software engineer located in the Bay Area. I am passionate about technology, education, and the intersection of the two.
              </p>
          </div>
          <div className="link-wrapper">
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/work">Work</Link>
            <Link className="link"  to="contact">Contact</Link>
          </div>
          <div className="icon-wrapper">

            <a className="icon" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
            </a>
            <a className="icon" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/></svg>
            </a>
            <a className="icon" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/></svg>
            </a>
          </div>
        </div>
        </PageTransition>
      </div>
    </div>
    
    );
 }
}

export default IndexPage;
