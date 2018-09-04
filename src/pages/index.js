import React, { Component } from 'react'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';

const PageTransistionWrapper = (props) => {
  if(props.activeState) {
    return (
      <PageTransition
        defaultStyle={{
          transition: 'width 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
          width: '33%',
          border: '1px solid red',
          margin: '30px 15px',
          display: 'block',

        }}
        transitionStyles={{
          exiting: { width: '100%', margin: '30px 0px' },
        }}
        transitionTime={1000}
        >
        {props.children}
    </PageTransition>
    )
  } else {
    return (
      <PageTransition
      defaultStyle={{
        transition: 'width 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        width: '33%',
        border: '1px solid red',
        margin: '30px 15px',
        opacity: '1',
        display: 'block',
      }}
      transitionStyles={{
        exiting: { width: '0%', opacity: '0', margin: '0px' },
      }}
      transitionTime={1000}
      >
      {props.children}
    </PageTransition>
    )
  }
}
  


class IndexPage extends Component {
  constructor() {
    super();

    this.state = {
      educator: false,
      programmer: false,
      adventurer: false,
    }
  }

  activatePanel(category) {
    var newState = this.state;
    Object.keys(newState).forEach(key => {
      if (key === category) {
        newState[key] = true;
      } else {
        newState[key] = false;
      }
    })
    this.setState(newState);
  }

  render() {
    return (
      <div className="site__panel-container">
       <PageTransistionWrapper activeState={this.state.educator}>
        <Link to="/educator" onClick={() => this.activatePanel('educator')} className="site__panel site__panel--educator">educator</Link>
      </PageTransistionWrapper>
      <PageTransistionWrapper activeState={this.state.programmer}>
        <Link to="/programmer" onClick={() => this.activatePanel('programmer')} className="site__panel">programmer</Link>
      </PageTransistionWrapper>
      <PageTransistionWrapper activeState={this.state.adventurer}>
        <Link to="/adventurer" onClick={() => this.activatePanel('adventurer')} className="site__panel">adventurer</Link>
      </PageTransistionWrapper>
    </div>
    )
  }
}

export default IndexPage
