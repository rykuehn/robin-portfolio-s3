import React, { Component } from 'react'
import Link from 'gatsby-link'

class Work extends Component {
  render() {
    return (
      <div className="site__wrapper  ">
        <div className="index__wrapper">
          <div className="index__left">
            <div className="index__left-image" />
          </div>
          <div className="index__right">
            <div className="secondary__link-wrapper">
              <Link className="link" to="/">
                Back to Home
              </Link>
            </div>
            <div className="watermark">
              <h2 className="secondary__watermark"> Work </h2>
              <div className="secondary__watermark-shadow">w</div>
            </div>
            <p className="secondary__subtitle">
              Here is a list of some of the companies and organizations that I
              have been involved with through the years.
            </p>
            <div className="scrollable-box">
              <div className="listItem">
                <h4 className="secondary__info">
                  Capital One, <span> Software Engineer </span>
                </h4>
                <h5> May 2016 - present </h5>
              </div>
              <ul>
                <li> Create A/B Tests </li>
                <li> Work on high-traffic pages like www.capitalone.com </li>
                <li>
                  {' '}
                  Convert Header/Footer from monolithic Jquery code base to
                  Preact{' '}
                </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  Hack Reactor, <span> Software Engineering Fellow </span>
                </h4>
                <h5>December 2015 - March 2016</h5>
              </div>
              <ul>
                <li> Taught workshops on Redux, Flexbox, etc.</li>
                <li> Answered questions about assignments </li>
                <li> Mentored Students </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  The Hamlin School, <span> Associate 2nd Grade Teacher</span>
                </h4>
                <h5> August 2014 - June 2015</h5>
              </div>
              <ul>
                <li> Taught 2nd grade </li>
                <li> Integrated code into assignments </li>
                <li> Mentored Students </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  The Hamlin School, <span> Associate 2nd Grade Teacher</span>
                </h4>
                <h5> August 2014 - June 2015</h5>
              </div>
              <ul>
                <li> Taught 2nd grade </li>
                <li> Integrated code into assignments </li>
                <li> Mentored Students </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  The Hamlin School, <span> Associate 2nd Grade Teacher</span>
                </h4>
                <h5> August 2014 - June 2015</h5>
              </div>
              <ul>
                <li> Taught 2nd grade </li>
                <li> Integrated code into assignments </li>
                <li> Mentored Students </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
