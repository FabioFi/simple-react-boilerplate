import React from 'react'

import 'normalize.css/normalize.css'
import styles from '../css/style'

class App extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <h1>Welcome</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
