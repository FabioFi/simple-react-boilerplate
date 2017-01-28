import React, { Component } from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'

import styles from '../css/App'

import Home from './Home'
import Hello from './Hello'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className={styles.App}>
          <Match exactly pattern='/' component={Home} />
          <Match pattern='/hello' component={Hello} />
        </div>
      </Router>
    )
  }
}
