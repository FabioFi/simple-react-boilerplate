import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from '../css/App'

import Home from './Home'
import Hello from './Hello'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className={styles.App}>
          <Route exact path='/' component={Home}/>
          <Route path='/hello' component={Hello} />
        </div>
      </Router>
    )
  }
}
