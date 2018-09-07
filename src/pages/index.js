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
                  <li>React</li> 
                  <li>React</li> 
                  <li>React</li> 
                  <li>React</li> 
                  <li>React</li> 
                  <li>React</li> 
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
