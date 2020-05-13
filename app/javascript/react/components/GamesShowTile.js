import React from "react"

const GamesShowTile = (props) => {
  return (
    <>
      <h1>{props.game.title}</h1>
      <img src={props.game.image} alt={props.game.title} />
      <p id="game-show-padding-top">Started Playing: {props.game.start_date}</p>
      <p>Time Played: {props.game.time_played}</p>
      <p id="game-show-padding-bottom">Notes: {props.game.progress}</p>
    </>
  )
}

export default GamesShowTile
