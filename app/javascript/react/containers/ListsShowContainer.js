import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import PointsNewComponent from "../components/PointsNewComponent"

const ListsShowContainer = (props) => {
  let [list, setList] = useState({
    title: "",
    image: "",
    game: {}
  })
  let [points, setPoints] = useState([])
  let [pointForm, setPointForm] = useState(false)

  let listID = props.match.params.id
  useEffect(() => {
    fetch(`/api/v1/lists/${listID}`)
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
      setList(body.list)
      setPoints(body.list.points)
    })
    .catch((error) => {
      console.error(`Error fetching list: ${error.message}`)
    })
  }, [])

  const postNewPoint = (formPayload) => {
    fetch("/api/v1/points", {
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
      setPoints([
        ...points,
        {
          title: body.title,
          list_id: body.list_id
        }
      ])
      setPointForm(false)
    })
    .catch((error) => {
      console.error(`Error posting point: ${error.message}`)
    })
  }

  const changePointForm = (event) => {
    setPointForm(!pointForm)
  }

  let displayPointForm = <button onClick={changePointForm} className="game-buttons text-center">New point form</button>
  if (pointForm) {
      displayPointForm = <div><button onClick={changePointForm} className="game-buttons text-center">Back to list</button><PointsNewComponent key={list.id} list={list} postNewPoint={postNewPoint} /></div>
  }

  let pointTiles = points.map((point) => {
    return (
      <p>{point.title}</p>
    )
  })

  return (
    <div className="grid-container game-tiles text-center">
      <Link to={`/games/${list.game.id}`}>
        <h1 className="game-title">{list.game.title}</h1>
      </Link>
      <p>{list.title}</p>
      <img src={list.image} alt={list.title} />
      <div className="text-center new-point-button">
        {displayPointForm}
      </div>
      <ul>
        {pointTiles}
      </ul>
    </div>
  )
}

export default ListsShowContainer
