import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export default class Hello extends Component {
  render () {
    return (
      <div>
        <Route path={`${this.props.match.url}/:name`} component={Name} />
        <Route path={this.props.match.url} exact component={Name} />
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
      <h2>Hello {this.props.match.params.name}</h2>
    )
  }
}
