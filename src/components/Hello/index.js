import React from 'react'
import { Route, Link } from 'react-router-dom'

const Hello = ({ match }) => (
  <div>
    <Route path={`${match.url}/:name`} component={Name} />
    <Route path={match.url} exact component={Name} />
    <ul>
      <li><Link to='/'>Go Back</Link></li>
    </ul>
  </div>
)

const Name = ({ match }) => (
  <h2>Hello {match.params.name}</h2>
)

export default Hello
