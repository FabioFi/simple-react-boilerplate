import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
  render () {
    const name = 'world'
    return (
      <div className='home'>
        <h2>Home</h2>
        <ul>
          <li><Link to={`/hello/${name}`}>Hello</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
