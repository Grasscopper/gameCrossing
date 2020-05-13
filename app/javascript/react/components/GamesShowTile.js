import React from "react"

const GamesShowTile = (props) => {
  return (
    <>
      <h1>{props.game.title}</h1>
      <img src={props.game.image} alt={props.game.title} />
      <p id="game-show-padding-top"><p className="bold-game-show">Started Playing:</p> {props.game.start_date}</p>
      <p><p className="bold-game-show">Time Played:</p> {props.game.time_played}</p>
      <p id="game-show-padding-bottom">{props.game.progress}</p>
    </>
  )
}

export default GamesShowTile
