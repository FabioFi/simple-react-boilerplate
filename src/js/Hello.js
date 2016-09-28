import React from 'react'
import { Link } from 'react-router'

import styles from '../css/style'

class Hello extends React.Component {
  render () {
    return (
      <div className={styles.hello}>
        <h2>Hello {this.props.params.name}</h2>
        <ul>
          <li><Link to='/'>Go Back</Link></li>
        </ul>
      </div>
    )
  }
}

export default Hello
