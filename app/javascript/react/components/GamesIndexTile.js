import React, { useState } from "react"
import { Link } from "react-router-dom"

import ProgressIndexTile from "./ProgressIndexTile"

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

  // const upToFunction = (status) => {
  //   switch (status) {
  //     case "unplayed":
  //       setProgress(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress",
  //           progress: "progress",
  //           progressOne: "progress",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "started":
  //       setProgress(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress",
  //           progressOne: "progress",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "progress":
  //       setProgress(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress-clicked",
  //           progressOne: "progress",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "progressOne":
  //       setProgress(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress-clicked",
  //           progressOne: "progress-clicked",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "progressTwo":
  //       setProgress(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress-clicked",
  //           progressOne: "progress-clicked",
  //           progressTwo: "progress-clicked",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "beat":
  //       setProgress(
  //         {
  //           unplayed: "progress-beat",
  //           started: "progress-beat",
  //           progress: "progress-beat",
  //           progressOne: "progress-beat",
  //           progressTwo: "progress-beat",
  //           beat: "progress-beat"
  //         }
  //       )
  //       break
  //   }
  // }
  //
  // const downToFunction = (status) => {
  //   switch (status) {
  //     case "unplayed":
  //       setStatus(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress",
  //           progress: "progress",
  //           progressOne: "progress",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "started":
  //       setStatus(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress",
  //           progressOne: "progress",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "progress":
  //       setStatus(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress-clicked",
  //           progressOne: "progress",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "progressOne":
  //       setStatus(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress-clicked",
  //           progressOne: "progress-clicked",
  //           progressTwo: "progress",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "progressTwo":
  //       setStatus(
  //         {
  //           unplayed: "progress-clicked",
  //           started: "progress-clicked",
  //           progress: "progress-clicked",
  //           progressOne: "progress-clicked",
  //           progressTwo: "progress-clicked",
  //           beat: "progress"
  //         }
  //       )
  //       break
  //
  //     case "beat":
  //       setStatus(
  //         {
  //           unplayed: "progress-beat",
  //           started: "progress-beat",
  //           progress: "progress-beat",
  //           progressOne: "progress-beat",
  //           progressTwo: "progress-beat",
  //           beat: "progress-beat"
  //         }
  //       )
  //       break
  //   }
  // }

  const statusClicked = (event) => {
    event.preventDefault()
    if (event.currentTarget.className === "progress-clicked" || event.currentTarget.className === "progress-beat") {
      downToFunction(event.currentTarget.id)
    } else {
      upToFunction(event.currentTarget.id)
    }
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
