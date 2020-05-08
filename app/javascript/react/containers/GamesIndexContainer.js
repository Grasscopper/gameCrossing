import React, { useState, useEffect } from 'react'

import GamesIndexTile from "../components/GamesIndexTile"
import GamesNewComponent from "../components/GamesNewComponent"

const GamesIndexContainer = (props) => {
  let [games, setGames] = useState([])
  let [currentUser, setCurrentUser] = useState({
    user_name: "",
    email: ""
  })
  let [gameForm, setGameForm] = useState(false)

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

  const postNewGame = (formPayload) => {
    fetch("/api/v1/games", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
      setGames([
        ...games,
        {
          id: body.id,
          title: body.title,
          image: body.image,
          start_date: body.start_date,
          time_played: body.time_played,
          progress: body.progress,
          user_id: body.user.id
        }
      ])
      setGameForm(false)
    })
    .catch((error) => {
      console.error(`Error posting game: ${error.message}`)
    })
  }

  let currentUserHeader = <h1 className="text-center">{currentUser.user_name}'s Collection</h1>
  if (currentUser.user_name === "") {
    currentUserHeader = <div className="grid-container text-center"><div className="game-tiles"><h1>Welcome to Game Crossing!</h1></div><h1><a href="/users/sign_up">Sign up to start your video game collection</a></h1><h1><a href="/users/sign_in">Log in</a></h1></div>
  }

  const changeGameForm = (event) => {
    setGameForm(!gameForm)
  }

  let displayGameForm = <button onClick={changeGameForm}>New game form</button>
  if (gameForm) {
      displayGameForm = <div><button onClick={changeGameForm}>Back to collection</button><GamesNewComponent currentUser={currentUser} postNewGame={postNewGame}/></div>
  }

  if (gameForm === false && currentUser.user_name === "") {
    displayGameForm = null
  }

  //on new game submit, the game was not appearing without a refresh
  //this was because gameTiles checks game.user_id instead of game.user.id
  //the post fetched body had the newly created game in the wrong format
  //so in posNewGame, I force the parameter user_id
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
    <div className="grid-container" id="webpage-grid">
      {currentUserHeader}
      <div className="text-center">
        {displayGameForm}
      </div>
      {gameTiles}
    </div>
  )
}

export default GamesIndexContainer
