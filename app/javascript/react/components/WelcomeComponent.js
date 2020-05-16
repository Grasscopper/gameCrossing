import React from 'react'

const WelcomeComponent = (props) => {
  let daysky = "https://pressstart.vip/images/uploads/assets/bluemoon.png"
  return (
    <div className="grid-container text-center" id="webpage-grid">
      <div>
        <h1>Welcome to Game Crossing!</h1>
        <img src={daysky} className="daysky" alt="daysky image"/>
      </div>
      <h1><a href="/users/sign_up">Sign up to start your video game collection</a></h1>
      <h1><a href="/users/sign_in">Sign in</a></h1>
    </div>
  )
}

export default WelcomeComponent
