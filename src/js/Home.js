import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from '../css/Home'
import kermit from '../images/kermit.jpg'

export default class Home extends Component {
  state = {
    name: 'world'
  }

  render () {
    return (
      <div className={styles.Home}>
        <h2>Home</h2>
        <ul>
          <li><Link to={`/hello`}>Hello</Link></li>
          <li><Link to={`/hello/${this.state.name}`}>World</Link></li>
        </ul>
        <p>
          <img src={kermit} />
        </p>
      </div>
    )
  }
}
