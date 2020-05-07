import React, { useState, useEffect } from 'react'

import GamesIndexTile from "../components/GamesIndexTile"

const GamesIndexContainer = (props) => {
  let [games, setGames] = useState([])
  let [currentUser, setCurrentUser] = useState({
    user_name: "",
    email: ""
  })

  useEffect(() => {
    fetch('api/v1/games')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}: ${response.statusText}`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      setGames(body.games)
      if (body.currentUser !== null) {
        setCurrentUser(body.currentUser)
      }
    })
    .catch((error) => {
      console.error(`Error in fetching games: ${error.message}`)
    })
  }, [])

  let gameTiles = games.map((game) => {
    if (game.user_id === currentUser.id) {
      return (
        <GamesIndexTile
        key={game.id}
        game={game}
        />
      )
    }
  })

  let currentUserHeader = <h1 className="text-center">{currentUser.user_name}'s Collection</h1>
  if (currentUser.user_name === "") {
    currentUserHeader = <div className="grid-container text-center"><div className="game-tiles"><h1>Welcome to Game Crossing!</h1></div><h1><a href="/users/sign_up">Sign up to start your video game collection</a></h1><h1><a href="/users/sign_in">Log in</a></h1></div>
  }

  return (
    <div>
      {currentUserHeader}
      {gameTiles}
    </div>
  )
}

export default GamesIndexContainer
