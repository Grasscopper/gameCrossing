import React, { useState } from "react"
import { Link } from "react-router-dom"

const GamesIndexTile = (props) => {
  let [status, setStatus] = useState({
    unplayed: "progress-clicked",
    started: "progress",
    progress: "progress",
    progressOne: "progress",
    progressTwo: "progress",
    beat: "progress"
  })

  let gameID = props.game.id

  const sendDeletionGame = (event) => {
    event.preventDefault()
    props.deleteGame(gameID)
  }

  let deleteGameButton = null
  if (props.deletion) {
    deleteGameButton = <button id="delete-game" onClick={sendDeletionGame}>Delete game</button>
  }

  const upToFunction = (status) => {
    switch (status) {
      case "unplayed":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress",
            progress: "progress",
            progressOne: "progress",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "started":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress",
            progressOne: "progress",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "progress":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress-clicked",
            progressOne: "progress",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "progressOne":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress-clicked",
            progressOne: "progress-clicked",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "progressTwo":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress-clicked",
            progressOne: "progress-clicked",
            progressTwo: "progress-clicked",
            beat: "progress"
          }
        )
        break

      case "beat":
        setStatus(
          {
            unplayed: "progress-beat",
            started: "progress-beat",
            progress: "progress-beat",
            progressOne: "progress-beat",
            progressTwo: "progress-beat",
            beat: "progress-beat"
          }
        )
        break
    }
  }

  const downToFunction = (status) => {
    switch (status) {
      case "unplayed":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress",
            progress: "progress",
            progressOne: "progress",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "started":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress",
            progressOne: "progress",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "progress":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress-clicked",
            progressOne: "progress",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "progressOne":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress-clicked",
            progressOne: "progress-clicked",
            progressTwo: "progress",
            beat: "progress"
          }
        )
        break

      case "progressTwo":
        setStatus(
          {
            unplayed: "progress-clicked",
            started: "progress-clicked",
            progress: "progress-clicked",
            progressOne: "progress-clicked",
            progressTwo: "progress-clicked",
            beat: "progress"
          }
        )
        break

      case "beat":
        setStatus(
          {
            unplayed: "progress-beat",
            started: "progress-beat",
            progress: "progress-beat",
            progressOne: "progress-beat",
            progressTwo: "progress-beat",
            beat: "progress-beat"
          }
        )
        break
    }
  }

  const statusClicked = (event) => {
    event.preventDefault()
    if (event.currentTarget.className === "progress-clicked" || event.currentTarget.className === "progress-beat") {
      downToFunction(event.currentTarget.id)
    } else {
      upToFunction(event.currentTarget.id)
    }
  }

  return (
    <div className="grid-container game-tiles text-center">
      <Link to={`/games/${gameID}`}>
        <h1 className="game-title">{props.game.title}</h1>
      </Link>
      <button id="unplayed" className={status.unplayed} onClick={statusClicked}>
      Unplayed</button>

      <button id="started" className={status.started} onClick={statusClicked}>
      Started</button>

      <button id="progress" className={status.progress} onClick={statusClicked}>
      Progress</button>

      <button id="progressOne" className={status.progressOne} onClick={statusClicked}>
      Progress+</button>

      <button id="progressTwo" className={status.progressTwo} onClick={statusClicked}>
      Progress++</button>

      <button id="beat" className={status.beat} onClick={statusClicked}>
      Beat</button>

      {deleteGameButton}
    </div>
  )
}

export default GamesIndexTile
