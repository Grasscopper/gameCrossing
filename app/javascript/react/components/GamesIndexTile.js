import React, { useState } from "react"
import { Link } from "react-router-dom"

const GamesIndexTile = (props) => {
  let [status, setStatus] = useState(props.game.status)
  let [formPayload, setFormPayload] = useState({
    title: props.game.title,
    image: props.game.image,
    start_date: props.game.start_date,
    time_played: props.game.time_played,
    progress: props.game.progress
  })
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

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const sendGameEdit = (event) => {
    event.preventDefault()
    props.fetchEditGameStatus(gameID, formPayload)
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

  let editForm = null
  if (props.edit) {
    editForm = <form autoComplete="off" onSubmit={sendGameEdit}>
      <div className="grid-x">
        <div className="small-12 medium-6">
          <label htmlFor="title">Title</label>
          <input
          id="title"
          name="title"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.title}
          />
        </div>

        <div className="small-12 medium-6">
          <label htmlFor="image">Image (url)</label>
          <input
          id="image"
          name="image"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.image}
          />
        </div>
      </div>

      <div className="grid-x">
        <div className="small-12 medium-6">
          <label htmlFor="start_date">First Played</label>
          <input
          id="start_date"
          name="start_date"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.start_date}
          />
        </div>

        <div className="small-12 medium-6">
          <label htmlFor="time_played">Time Played</label>
          <input
          id="time_played"
          name="time_played"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.time_played}
          />
        </div>
      </div>

      <div className="small-12">
        <label htmlFor="progress">Notes</label>
        <textarea
        id="progress"
        name="progress"
        type="text"
        rows="3"
        onChange={update}
        value={formPayload.progress}
        />
      </div>

      <button type="submit" value="Submit" id="edit-game">Edit Game</button>
    </form>
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
      {editForm}

    </div>
  )
}

export default GamesIndexTile
