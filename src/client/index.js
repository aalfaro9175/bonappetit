import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './css/style.css'
import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const NotFoundCustom = props => <NotFound {...props} />

const Root = () => (
  <Switch>
    <Route path="/store/:id" component={App} />
    <Route exact path="/" component={StorePicker} />
    <Route path="*" component={NotFoundCustom} />
  </Switch>
)

render(
  <BrowserRouter>
    <div>
      <Root />
    </div>
  </BrowserRouter>,
  document.getElementById('main')
)
