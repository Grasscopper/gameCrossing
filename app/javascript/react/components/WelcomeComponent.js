import React from 'react'

const WelcomeComponent = (props) => {
  return (
    <div className="grid-container text-center" id="webpage-grid">
      <div className="game-tiles">
        <h1>Welcome to Game Crossing!</h1>
      </div>
      <h1><a href="/users/sign_up">Sign up to start your video game collection</a></h1>
      <h1><a href="/users/sign_in">Sign in</a></h1>
    </div>
  )
}

export default WelcomeComponent
