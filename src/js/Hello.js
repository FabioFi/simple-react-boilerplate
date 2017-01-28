import React, { Component } from 'react'
import Match from 'react-router/Match'
import Link from 'react-router/Link'

// import styles from '../css/style'

export default class Hello extends Component {
  render () {
    return (
      <div>
        <Match pattern={`${this.props.pathname}/:name`} component={Name} />
        <Match pattern={this.props.pathname} exactly component={Name} />
        <ul>
          <li><Link to='/'>Go Back</Link></li>
        </ul>
      </div>
    )
  }
}

class Name extends Component {
  render () {
    return (
      <h2>Hello {this.props.params.name}</h2>
    )
  }
}
