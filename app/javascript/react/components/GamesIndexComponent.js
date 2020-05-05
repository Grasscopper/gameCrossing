import React, { useState, useEffect } from 'react'

import GamesIndexTile from "./GamesIndexTile"

const GamesIndexComponent = (props) => {
  let [games, setGames] = useState([])
  let [currentUser, setCurrentUser] = useState({})

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

  return (
    <div>
      {gameTiles}
    </div>
  )
}

export default GamesIndexComponent
