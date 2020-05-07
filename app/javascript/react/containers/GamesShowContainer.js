import React, { useState, useEffect } from "react"

import GamesShowTile from "../components/GamesShowTile"
import ListsIndexTile from "../components/ListsIndexTile"

const GamesShowContainer = (props) => {
  let [game, setGame] = useState({
    title: "",
    image: "",
    start_date: "",
    time_played: "",
    progress: ""
  })
  let [lists, setLists] = useState([])

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
      setLists(body.game.lists)
    })
    .catch((error) => {
      console.error(`Error in fetching game: ${error.message}`)
    })
  }, [])

  let listTiles = lists.map((list) => {
    return (
      <ListsIndexTile
      key={list.title}
      list={list}
      />
    )
  })

  if (listTiles.length === 0) {
    listTiles = <h3>Empty</h3>
  }

  return (
    <div className="grid-container">
      <GamesShowTile
      key={game.id}
      game={game}
      />
      <div className="grid-container game-tiles text-center">
        <h2 className="underline">To - Do Lists</h2>
        {listTiles}
      </div>
    </div>
  )
}

export default GamesShowContainer
