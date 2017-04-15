import { h, Component } from 'preact'
import { Router } from 'preact-router'

import styles from './styles'

import Home from '../Home'
import Hello from '../Hello'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div className={styles.App}>
        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <Hello path='/hello' />
          <Hello path='/hello/:name' />
        </Router>
      </div>
    );
  }
}
