import React from 'react'
import { render } from 'react-dom'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHistory } from 'history'

import App from './components/App'
import Home from './components/Home'
import Hello from './components/Hello'

import 'css/style'

const browserHistory = useRouterHistory(createHistory)({
  basename: '/'
})

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/hello(/:name)' component={Hello} />
    </Route>
  </Router>
), document.getElementById('root'))
