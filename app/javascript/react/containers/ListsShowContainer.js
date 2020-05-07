import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ListsShowContainer = (props) => {
  let [list, setList] = useState({
    title: "",
    image: "",
    game: {}
  })
  let [points, setPoints] = useState([])

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

  let pointTiles = points.map((point) => {
    return (
      <p>{point.title}</p>
    )
  })

  return (
    <div className="grid-container game-tiles text-center">
      <Link to={`/games/${list.game.id}`}>
        <h1>{list.game.title}</h1>
      </Link>
      <p>{list.title}</p>
      <img src={list.image} alt={list.title} />
      <ul>
        {pointTiles}
      </ul>
    </div>
  )
}

export default ListsShowContainer
