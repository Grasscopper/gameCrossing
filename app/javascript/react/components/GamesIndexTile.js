import React from "react"
import { Link } from "react-router-dom"

const GamesIndexTile = (props) => {
  let gameID = props.game.id

  return (
    <div className="grid-container game-tiles text-center">
      <h1>{props.game.title}</h1>
      <Link to={`/games/${gameID}`}>
        <img src={props.game.image} alt={props.game.title} />
      </Link>
      <p>Started Playing: {props.game.start_date}</p>
      <p>Time Played: {props.game.time_played}</p>
      <p>Progress: {props.game.progress}</p>
    </div>
  )
}

export default GamesIndexTile
