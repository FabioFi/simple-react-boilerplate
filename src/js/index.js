import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './Home'
import Hello from './Hello'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/hello(/:name)' component={Hello} />
    </Route>
  </Router>
), document.getElementById('root'))
