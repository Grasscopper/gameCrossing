import React, { useState, useEffect } from "react"

const ListsShowComponent = (props) => {
  let [list, setList] = useState({
    title: "",
    image: ""
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
      <li>{point.title}</li>
    )
  })

  return (
    <div>
      <p>{list.title}</p>
      <ul>
        {pointTiles}
      </ul>
    </div>
  )
}

export default ListsShowComponent
