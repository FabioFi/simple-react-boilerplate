import { h, render } from 'preact'

let root;
function init() {
  let App = require('./components/App').default
  root = render(<App />, document.body, root)
}

if (module.hot) {
  require('preact/devtools')
  module.hot.accept('./components/App', () => requestAnimationFrame(init))
}

init()
