import React from "react"
import { Link } from "react-router-dom"

const ListsIndexTile = (props) => {
  let listID = props.list.id

  const sendDeletionList = (event) => {
    event.preventDefault()
    props.deleteList(listID)
  }

  let deleteListButton = null
  if (props.deletion) {
    deleteListButton = <button id="delete-game" onClick={sendDeletionList}>Delete list</button>
  }

  return (
    <>
      <Link to={`/lists/${listID}`}>
        <h3 className="game-title">{props.list.title}</h3>
      </Link>
      {deleteListButton}
    </>
  )
}

export default ListsIndexTile
