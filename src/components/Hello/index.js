import { h } from 'preact'
import { Link } from 'preact-router'

const Hello = ({ name }) => (
  <div>
    <h2>Hello {name}</h2>
    <ul>
      <li><Link href='/'>Go Back</Link></li>
    </ul>
  </div>
)

export default Hello
