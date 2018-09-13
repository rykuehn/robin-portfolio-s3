import React, { Component } from 'react'
import Link from 'gatsby-link'

class Contact extends Component {
  render() {
    return (
      <div className="site__wrapper">
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
              <h2 className="secondary__watermark"> Contact </h2>
              <div className="secondary__watermark-shadow">c</div>
            </div>
            <p className="secondary__subtitle">
              I'm based in the Bay Area. Drop me a line.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
