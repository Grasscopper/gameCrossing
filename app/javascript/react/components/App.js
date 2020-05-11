import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import WelcomeComponent from "./WelcomeComponent"
import GamesIndexContainer from "../containers/GamesIndexContainer"
import GamesShowContainer from "../containers/GamesShowContainer"
import ListsShowContainer from "../containers/ListsShowContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomeComponent} />
        <Route exact path="/games" component={GamesIndexContainer} />
        <Route exact path="/games/:id" component={GamesShowContainer} />
        <Route exact path="/lists/:id" component={ListsShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
