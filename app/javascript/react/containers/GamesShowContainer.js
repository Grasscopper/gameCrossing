import React, { useState, useEffect } from "react"

import GamesShowTile from "../components/GamesShowTile"
import ListsIndexTile from "../components/ListsIndexTile"
import ListsNewComponent from "../components/ListsNewComponent"

const GamesShowContainer = (props) => {
  let [game, setGame] = useState({
    id: 0,
    title: "",
    image: "",
    start_date: "",
    time_played: "",
    progress: ""
  })
  let [lists, setLists] = useState([])
  let [listForm, setListForm] = useState(false)
  let [deletion, setDeletion] = useState(false)

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

  const postNewList = (formPayload) => {
    fetch("/api/v1/lists", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
      setLists([
        ...lists,
        {
          id: body.id,
          title: body.title,
          image: body.image,
          game_id: body.game_id
        }
      ])
      setListForm(false)
    })
    .catch((error) => {
      console.error(`Error posting list: ${error.message}`)
    })
  }

  const deleteList = (listID) => {
    fetch(`/api/v1/lists/${listID}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
      setLists(body)
    })
    .catch((error) => {
      console.error(`Error deleting list: ${error.message}`)
    })
  }

  const changeListForm = (event) => {
    setListForm(!listForm)
  }

  const changeListDelete = (event) => {
    event.preventDefault()
    setDeletion(!deletion)
  }

  let displayListDeleteButton = <button className="game-buttons" onClick={changeListDelete}>Delete lists</button>

  let displayListForm = <button className="game-buttons" onClick={changeListForm} className="game-buttons">New list form</button>
  if (listForm) {
      displayListForm = <div><button className="game-buttons" onClick={changeListForm}>Back to game</button><ListsNewComponent game={game} postNewList={postNewList}/></div>
      displayListDeleteButton = null
  }

  let listTiles = lists.map((list) => {
    return (
      <ListsIndexTile
      key={list.id}
      list={list}
      deletion={deletion}
      deleteList={deleteList}
      />
    )
  })

  if (listTiles.length === 0) {
    listTiles = <h3>Empty</h3>
  }

  return (
    <div className="grid-container">
      <div className="game-tiles text-center show-tile">
        <GamesShowTile
        key={game.id}
        game={game}
        />
        {displayListForm}
        {displayListDeleteButton}
      </div>
      <div className="grid-container game-tiles text-center">
        <h2 className="underline">Lists</h2>
        {listTiles}
      </div>
    </div>
  )
}

export default GamesShowContainer
