import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GamesIndexComponent from "./GamesIndexComponent"
import GamesShowComponent from "./GamesShowComponent"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GamesIndexComponent} />
        <Route exact path="/games" component={GamesIndexComponent} />
        <Route exact path="/games/:id" component={GamesShowComponent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
