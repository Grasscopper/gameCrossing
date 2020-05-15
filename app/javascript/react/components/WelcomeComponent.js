import React from 'react'

import daysky from "/Users/grasscopper/bt/gameCrossing/app/assets/images/gamecrossingdaysky.png"

const WelcomeComponent = (props) => {
  return (
    <div className="grid-container text-center" id="webpage-grid">
      <div>
        <h1>Welcome to Game Crossing!</h1>
        <img src={daysky} id="daysky"/>
      </div>
      <h1><a href="/users/sign_up">Sign up to start your video game collection</a></h1>
      <h1><a href="/users/sign_in">Sign in</a></h1>
    </div>
  )
}

export default WelcomeComponent
