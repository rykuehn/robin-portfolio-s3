import React, { Component } from 'react';
import Link from 'gatsby-link';
import fortunes from './fortunes.json';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false
    }
  }

  showAnimation(e) {
    this.setState({ animate: true }, () => setTimeout(() => this.setState({animate: false}), 500));
  }
 render() {
   return (
     <div className="site__wrapper">
      <div className="site__left-panel">
        <h1>Hey there!</h1>
        <h3>I'm Robin.</h3>
        <h3>Software Engineer. Granola Grazer.</h3>
        <div className="site__contact-container">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
          </div>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/></svg>
          </div>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
          </div>
        </div>
      </div>
      <div className="site__right-panel">
        <div className="site__section site__section-fortune">
          <h2> Just for Fun. </h2>
          <h4> Get your fortune by clicking the cookie! </h4>
          <div className="site__fortune-container" onTouchStart={() => document.querySelector('site__fortune_label')[0].toggle('hover')}>
            <div className={`cookie-icon ${this.state.animate ? "cookie-animation" : ""}`} onClick={this.showAnimation.bind(this)}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297 297">
                <path d="M290.992,54.409L265.451,5.293c-1.832-3.523-5.595-5.604-9.562-5.255c-3.956,0.342-7.317,3.032-8.518,6.817  c-7.488,23.614-18.361,44.149-32.344,61.172c-1.101-1.013-2.203-2.004-3.309-2.971c-24.263-21.21-49.996-31.52-78.676-31.52  c-29.562,0-61.393,14.876-87.33,40.813C19.776,100.286,4.9,132.116,4.9,161.677c0,28.677,10.31,54.411,31.521,78.673  c16.127,18.449,38.578,36.004,70.654,55.25c1.576,0.945,3.32,1.4,5.047,1.4c3.001,0,5.948-1.374,7.865-3.931  c0.699-0.933,17.189-23.216,22.747-56.569c3.326-19.952,3.023-46.419-10.039-75.098c17.122,7.831,35.015,11.774,53.563,11.774  c44.923,0,76.843-23.551,78.18-24.553c4.027-3.02,5.12-8.597,2.53-12.912c-2.891-4.818-5.743-9.415-8.565-13.811  c27.889-33.469,33.293-59.93,33.518-61.09C292.342,58.633,292.016,56.377,290.992,54.409z M186.258,153.529  c-31.498,0-61.139-13.67-88.099-40.63c-3.837-3.835-10.056-3.835-13.893,0c-1.918,1.919-2.877,4.432-2.877,6.946  c0,2.514,0.959,5.027,2.877,6.946c32.096,32.096,45.29,67.656,39.217,105.695c-2.921,18.298-9.813,32.942-14.501,41.258  c-43.028-26.77-84.436-61.115-84.436-112.068c0-24.03,13.106-51.482,35.059-73.436c21.953-21.952,49.406-35.059,73.44-35.059  c50.963,0,85.309,41.419,112.08,84.455C234.361,143.727,212.897,153.529,186.258,153.529z M246.893,104.903  c-6.068-8.466-12.052-16.015-18.045-22.756c11.794-14.007,21.631-30.124,29.382-48.159L271.807,60.1  C269.76,66.818,263.394,83.887,246.893,104.903z" fill="#8E354A"></path>
              </svg>
            </div>
            <div className="site__fortune_label"> 
              <div className="site__fortune_label--front">
                <p>{fortunes[0].fortune.message}</p>
              </div>
              <div className="site__fortune_label--back">
                <p>{fortunes[0].lesson.english}</p>
                <p>{fortunes[0].lesson.chinese}</p>
                <p>{fortunes[0].lesson.pronunciation}</p>
              </div>
            </div>
          </div>
        </div>
          <div className="site__section-projects site__section">
            <h2> Intro. </h2>
            <div className="site__intro-text">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci a nulla aliquam pellentesque. Vivamus rhoncus nisl eu lobortis luctus. Vestibulum congue nunc aliquet eros ullamcorper, quis tincidunt eros convallis. Donec a mollis dui. Nullam scelerisque aliquam justo quis viverra. Sed nec felis ut lorem laoreet mattis nec non purus. Vestibulum justo urna, pulvinar non convallis a, pellentesque et ex. Sed placerat sapien at cursus dapibus. Donec eu efficitur erat, eget efficitur turpis. Praesent pharetra nisi sed pretium bibendum. Mauris rutrum volutpat vulputate. Quisque non ultrices libero.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut orci a nulla aliquam pellentesque. Vivamus rhoncus nisl eu lobortis luctus. Vestibulum congue nunc aliquet eros ullamcorper, quis tincidunt eros convallis. Donec a mollis dui. Nullam scelerisque aliquam justo quis viverra. Sed nec felis ut lorem laoreet mattis nec non purus. Vestibulum justo urna, pulvinar non convallis a, pellentesque et ex. Sed placerat sapien at cursus dapibus. Donec eu efficitur erat, eget efficitur turpis. Praesent pharetra nisi sed pretium bibendum. Mauris rutrum volutpat vulputate. Quisque non ultrices libero.
              </p>
            </div>
          </div>
          <div className="site__section-contact site__section">
            <h2> Expertise. </h2>
            <div>
              <div className="expertise_container">
                <div className="download">
                  This is where my downloadable resume will be
                </div>
                <div>
                <ul>
                  <li>Javascript</li> 
                  <li>React</li> 
                  <li>Redux</li> 
                  <li>Webpack</li>
                  <li>Mobx</li> 
                  <li>AWS</li> 
                  <li>Jquery</li> 
                  <li>Node</li> 
                  <li>HTML5</li> 
                  <li>CSS3</li> 
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
 }
}

export default IndexPage
