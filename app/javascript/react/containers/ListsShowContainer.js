import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import PointsNewComponent from "../components/PointsNewComponent"
import PointsIndexTile from "../components/PointsIndexTile"

const ListsShowContainer = (props) => {
  let [list, setList] = useState({
    title: "",
    image: "",
    game: {}
  })
  let [points, setPoints] = useState([])
  let [pointForm, setPointForm] = useState(false)
  let [deletion, setDeletion] = useState(false)
  let [edit, setEdit] = useState(false)

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
          id: body.id,
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

  const deletePoint = (pointID) => {
    fetch(`/api/v1/points/${pointID}`, {
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
      setPoints(body)
    })
    .catch((error) => {
      console.error(`Error deleting point: ${error.message}`)
    })
  }

  const fetchEditPoint = (pointID, formPayload) => {
    fetch(`/api/v1/points/${pointID}`, {
      credentials: "same-origin",
      method: "PATCH",
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
      setPoints(body)
    })
    .catch((error) => {
      console.error(`Error editing list: ${error.message}`)
    })
  }

  const changePointForm = (event) => {
    event.preventDefault()
    setPointForm(!pointForm)
  }

  const changePointDelete = (event) => {
    event.preventDefault()
    setDeletion(!deletion)
  }

  const changePointEdit = (event) => {
    event.preventDefault()
    setEdit(!edit)
  }

  let displayPointDeleteButton = <button className="game-buttons" onClick={changePointDelete}>Delete Points</button>

  let displayPointEditButton = <button className="game-buttons" onClick={changePointEdit}>Edit Points</button>

  let displayPointForm = <button onClick={changePointForm} className="game-buttons text-center">New Point Form</button>
  if (pointForm) {
      displayPointForm = <div><button onClick={changePointForm} className="game-buttons text-center">Back to List</button><PointsNewComponent key={list.id} list={list} postNewPoint={postNewPoint} /></div>
      displayPointDeleteButton = null
      displayPointEditButton = null
  }

  let pointTiles = points.map((point) => {
    return (
      <PointsIndexTile
      key={point.id}
      id={point.id}
      point={point}
      deletion={deletion}
      deletePoint={deletePoint}
      edit={edit}
      fetchEditPoint={fetchEditPoint}
      />
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
        {displayPointEditButton}
        {displayPointDeleteButton}
      </div>
      <ul>
        {pointTiles}
      </ul>
    </div>
  )
}

export default ListsShowContainer
