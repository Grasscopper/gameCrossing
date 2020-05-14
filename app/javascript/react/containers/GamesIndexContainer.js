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
  let [edit, setEdit] = useState(false)
  let [deletion, setDeletion] = useState(false)

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

  const deleteGame = (gameID) => {
    fetch(`/api/v1/games/${gameID}`, {
      credentials: "same-origin",
      method: "DELETE",
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
      setGames(body)
    })
    .catch((error) => {
      console.error(`Error deleting game: ${error.message}`)
    })
  }

  const fetchEditGameStatus = (gameID, status) => {
    fetch(`/api/v1/games/${gameID}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(status),
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
      setGames(body)
    })
    .catch((error) => {
      console.error(`Error editing game: ${error.message}`)
    })
  }

  let currentUserHeader = <h1 className="text-center">{currentUser.user_name}'s Collection</h1>
  if (currentUser.user_name === "") {
    currentUserHeader = <div className="grid-container text-center"><div className="game-tiles"><h1>Welcome to Game Crossing!</h1></div><h1><a href="/users/sign_up">Sign up to start your video game collection</a></h1><h1><a href="/users/sign_in">Log in</a></h1></div>
  }

  const changeGameForm = (event) => {
    event.preventDefault()
    setGameForm(!gameForm)
  }

  const changeGameEdit = (event) => {
    event.preventDefault()
    setEdit(!edit)
  }

  const changeGameDelete = (event) => {
    event.preventDefault()
    setDeletion(!deletion)
  }

  let displayGameForm = <button className="game-buttons" onClick={changeGameForm}>New Game Form</button>

  let displayGameEditButton = <button className="game-buttons" onClick={changeGameEdit}>Edit Games</button>

  let displayGameDeleteButton = <button className="game-buttons" onClick={changeGameDelete}>Delete Games</button>

  if (gameForm || currentUser.user_name === "") {
      displayGameForm = <div><button onClick={changeGameForm} id="back-to-collection">Back to Collection</button><GamesNewComponent currentUser={currentUser} postNewGame={postNewGame}/></div>
      displayGameEditButton = null
      displayGameDeleteButton = null
  }

  if (gameForm === false && currentUser.user_name === "") {
    displayGameForm = null
  }

  let gameTiles = games.map((game) => {
    return (
      <GamesIndexTile
      key={game.id}
      game={game}
      edit={edit}
      deletion={deletion}
      deleteGame={deleteGame}
      fetchEditGameStatus={fetchEditGameStatus}
      />
    )
  })

  return (
    <div className="grid-container" id="webpage-grid">
      {currentUserHeader}
      <div className="text-center">
        {displayGameForm}
        {displayGameEditButton}
        {displayGameDeleteButton}
      </div>
      {gameTiles}
    </div>
  )
}

export default GamesIndexContainer
