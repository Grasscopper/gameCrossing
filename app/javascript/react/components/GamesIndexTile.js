import React, { useState } from "react"
import { Link } from "react-router-dom"

const GamesIndexTile = (props) => {
  let [status, setStatus] = useState(props.game.status)
  let unplayed = "progress-clicked"
  let started = "progress"
  let progress = "progress"
  let progressOne = "progress"
  let progressTwo = "progress"
  let beat = "progress"

  switch (props.game.status) {
    case "unplayed":
      unplayed = "progress-clicked"
      break
    case "started":
      unplayed = "progress-clicked"
      started = "progress-clicked"
      break
    case "progress":
      unplayed = "progress-clicked"
      started = "progress-clicked"
      progress = "progress-clicked"
      break
    case "progressOne":
      unplayed = "progress-clicked"
      started = "progress-clicked"
      progress = "progress-clicked"
      progressOne = "progress-clicked"
      break
    case "progressTwo":
      unplayed = "progress-clicked"
      started = "progress-clicked"
      progress = "progress-clicked"
      progressOne = "progress-clicked"
      progressTwo = "progress-clicked"
      break
    case "beat":
      unplayed = "progress-beat"
      started = "progress-beat"
      progress = "progress-beat"
      progressOne = "progress-beat"
      progressTwo = "progress-beat"
      beat = "progress-beat"
      break
  }

  let gameID = props.game.id

  const sendDeletionGame = (event) => {
    event.preventDefault()
    props.deleteGame(gameID)
  }

  let deleteGameButton = null
  if (props.deletion) {
    deleteGameButton = <button id="delete-game" onClick={sendDeletionGame}>Delete Game</button>
  }

  const sendGameStatus = (event) => {
    event.preventDefault()
    props.fetchEditGameStatus(gameID, event.currentTarget.id)
  }

  return (
    <div className="grid-container game-tiles text-center">
      <Link to={`/games/${gameID}`}>
        <h1 className="game-title">{props.game.title}</h1>
      </Link>
      <button id="unplayed" className={unplayed} onClick={sendGameStatus}>
      Unplayed</button>

      <button id="started" className={started} onClick={sendGameStatus}>
      Started</button>

      <button id="progress" className={progress} onClick={sendGameStatus}>
      Progress</button>

      <button id="progressOne" className={progressOne} onClick={sendGameStatus}>
      Progress+</button>

      <button id="progressTwo" className={progressTwo} onClick={sendGameStatus}>
      Progress++</button>

      <button id="beat" className={beat} onClick={sendGameStatus}>
      Beat</button>
      {deleteGameButton}
    </div>
  )
}

export default GamesIndexTile
