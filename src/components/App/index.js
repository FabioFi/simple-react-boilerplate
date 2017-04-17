import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './styles'

import Home from '../Home'
import Hello from '../Hello'

const App = () => (
  <Router>
    <div className={styles.App}>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
    </div>
  </Router>
)

export default App
