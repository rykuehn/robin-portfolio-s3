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
                <h5> May 2017 - present </h5>
              </div>
              <ul>
                <li>
                  Created A/B Tests using Adobe Target and launch them on
                  Capital One’s homepage
                </li>
                <li>
                  Reengineered the homepage’s header from Jquery/HTML to Preact
                  which reduced the bundle size
                </li>
                <li>
                  Implemented a new design for mobile that increased mobile app
                  downloads by more than 12,000
                </li>
                <li>
                  Wrote documentation for out team’s service so that it would be
                  easy for other teams to onboard.
                </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  Hack Reactor, <span> Software Engineering Fellow </span>
                </h4>
                <h5>December 2016 - March 2017</h5>
              </div>
              <ul>
                <li>
                  Taught one hour workshops on special topics such as Flexbox
                  and Redux.
                </li>
                <li>
                  Worked with students who needed to review recursion, data
                  structures, promises, and other Javascript fundamentals.
                </li>
                <li>
                  Conducted interviews with prospective students to assess
                  technical ability and culture fit
                </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  The Hamlin School, <span> Associate 2nd Grade Teacher</span>
                </h4>
                <h5> August 2015 - June 2016</h5>
              </div>
              <ul>
                <li>
                  Developed the essential questions and scope and sequence of a
                  revamped 2nd grade social studies curriculum.
                </li>
                <li>
                  Analyzed spelling assessments to create strategic groups that
                  receive targeted spelling instruction.
                </li>
                <li>
                  Facilitated two morning meetings a week, using the Responsive
                  Classroom format.{' '}
                </li>
                <li>
                  Designed and delivered mini-lessons in Reader’s workshop and
                  Writer’s Workshop
                </li>
                <li>
                  Collaborated in parent-teacher conferences, lesson planning,
                  and class website maintenance.
                </li>
              </ul>
              <div className="listItem">
                <h4 className="secondary__info">
                  San Francisco Electric Tour Company,{' '}
                  <span>Segway Tour Guide</span>
                </h4>
                <h5> April 2015 - January 2016</h5>
              </div>
              <ul>
                <li>
                  Entertained a groups of 10-13 tourists on segways during a 2.5
                  hour tour of San Francisco.{' '}
                </li>
                <li>
                  Maintained the safety of groups of 10 tourists throughout
                  their segway tour.{' '}
                </li>
                <li>
                  Trained first time segway riders to confidently operate their
                  own machine.{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
