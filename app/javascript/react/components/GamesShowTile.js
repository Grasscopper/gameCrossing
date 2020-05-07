import React from "react"

const GamesShowTile = (props) => {
  return (
    <div className="game-tiles text-center">
      <h1>{props.game.title}</h1>
      <img src={props.game.image} alt={props.game.title} />
      <p>Started Playing: {props.game.start_date}</p>
      <p>Time Played: {props.game.time_played}</p>
      <p>Progress: {props.game.progress}</p>
    </div>
  )
}

export default GamesShowTile