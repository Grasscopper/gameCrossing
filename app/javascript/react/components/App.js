import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GamesIndexComponent from "./GamesIndexComponent"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GamesIndexComponent} />
        <Route exact path="/games" component={GamesIndexComponent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
