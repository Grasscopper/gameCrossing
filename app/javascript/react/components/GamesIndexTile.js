import React, { useState } from "react"
import { Link } from "react-router-dom"

const GamesIndexTile = (props) => {
  // event.currentTarget.children.item(0).value
  // "0"

  let gameID = props.game.id

  const sendDeletionGame = (event) => {
    event.preventDefault()
    props.deleteGame(gameID)
  }

  let deleteGameButton = null
  if (props.deletion) {
    deleteGameButton = <button id="delete-game" onClick={sendDeletionGame}>Delete game</button>
  }

  const dropdown = (event) => {
    event.preventDefault()
  }

  return (
    <div className="grid-container game-tiles text-center">
      <Link to={`/games/${gameID}`}>
        <h1 className="game-title">{props.game.title}</h1>
      </Link>
      <select id="game-progress" onChange={dropdown}>
        <option value="0">Unplayed</option>
        <option value="1">Began playing</option>
        <option value="2">Good progress</option>
        <option value="3">Strong progress</option>
        <option value="4">Beat</option>
      </select>
      {deleteGameButton}
    </div>
  )
}

export default GamesIndexTile
