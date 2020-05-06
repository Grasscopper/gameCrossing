import React from "react"
import { Link } from "react-router-dom"

const GamesIndexTile = (props) => {
  let gameID = props.game.id

  return (
    <div className="grid-container game-tiles text-center">
      <Link to={`/games/${gameID}`}>
        <h1>{props.game.title}</h1>
      </Link>
      <select>
        <option value="0">Unplayed</option>
        <option value="1">Began playing</option>
        <option value="2">Good progress</option>
        <option value="3">Strong progress</option>
        <option value="4">Beat</option>
      </select>
    </div>
  )
}

export default GamesIndexTile
