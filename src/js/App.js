import React, { Component } from 'react'
import { BrowserRouter, Match } from 'react-router'

import styles from '../css/App'

import Home from './Home'
import Hello from './Hello'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        {({ router }) => (
          <div className={styles.App}>
            <Match exactly pattern='/' render={(props) => <Home router={router} {...props} />} />
            <Match pattern='/hello' render={(props) => <Hello router={router} {...props} />} />
          </div>
        )}
      </BrowserRouter>
    )
  }
}
