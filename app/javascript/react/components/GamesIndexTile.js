import React from "react"

const GamesIndexTile = (props) => {
  return (
    <div className="grid-container game-tiles text-center">
      <h1>{props.game.title}</h1>
      <img src={props.game.image} alt={props.game.title} />
      <p>Started Playing: {props.game.start_date}</p>
      <p>Time Played: {props.game.time_played}</p>
      <p>Progress: {props.game.progress}</p>
    </div>
  )
}

export default GamesIndexTile
