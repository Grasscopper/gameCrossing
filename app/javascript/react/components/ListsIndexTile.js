import React from "react"
import { Link } from "react-router-dom"

const ListsIndexTile = (props) => {
  let listID = props.list.id

  return (
    <Link to={`/lists/${listID}`}>
      <h3>{props.list.title}</h3>
    </Link>
  )
}

export default ListsIndexTile
