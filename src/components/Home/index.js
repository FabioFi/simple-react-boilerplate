import { h, Component } from 'preact'
import { Link } from 'preact-router'

import styles from './styles'
import kermit from '../../images/kermit.jpg'

export default class Home extends Component {
  state = {
    name: 'world'
  }

  render () {
    return (
      <div className={styles.Home}>
        <h2>Home</h2>
        <ul>
          <li><Link href={`/hello`}>Hello</Link></li>
          <li><Link href={`/hello/${this.state.name}`}>{this.state.name.toUpperCase()}</Link></li>
        </ul>
        <p>
          <img src={kermit} />
        </p>
      </div>
    )
  }
}
