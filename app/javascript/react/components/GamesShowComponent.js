import React, { useState, useEffect } from "react"

import GamesShowTile from "./GamesShowTile"

const GamesShowComponent = (props) => {
  let [game, setGame] = useState({})

  let gameID = props.match.params.id
  useEffect(() => {
    fetch(`/api/v1/games/${gameID}`)
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}: ${response.statusText}`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      setGame(body.game)
    })
    .catch((error) => {
      console.error(`Error in fetching game: ${error.message}`)
    })
  }, [])

  return (
    <GamesShowTile game={game} />
  )
}

export default GamesShowComponent
