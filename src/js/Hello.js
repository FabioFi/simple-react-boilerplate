import React from 'react'
import { Link } from 'react-router'

class Hello extends React.Component {
  render () {
    return (
      <div className='hello'>
        <h2>Hello {this.props.params.name}</h2>
        <ul>
          <li><Link to='/'>Go Home</Link></li>
        </ul>
      </div>
    )
  }
}

export default Hello
