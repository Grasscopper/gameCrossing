import React, { useState } from "react"
import { Link } from "react-router-dom"

const ListsIndexTile = (props) => {
  let listID = props.list.id
  let [formPayload, setFormPayload] = useState({
    title: props.list.title,
    image: props.list.image
  })

  const sendDeletionList = (event) => {
    event.preventDefault()
    props.deleteList(listID)
  }

  let deleteListButton = null
  if (props.deletion) {
    deleteListButton = <button id="delete-game" onClick={sendDeletionList}>Delete List</button>
  }

  const sendListEdit = (event) => {
    event.preventDefault()
    props.fetchEditList(listID, formPayload)
  }

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  let editListForm = null
  if (props.edit) {
    editListForm = <form autoComplete="off" onSubmit={sendListEdit}>
      <div className="grid-x">
        <div className="small-12 medium-6">
          <label htmlFor="title">Title</label>
          <input
          id="title"
          name="title"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.title}
          />
        </div>

        <div className="small-12 medium-6">
          <label htmlFor="image">Image (url)</label>
          <input
          id="image"
          name="image"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.image}
          />
        </div>
      </div>

      <button type="submit" value="Submit" className="game-buttons" id="edit-list">Edit List</button>
    </form>
  }

  return (
    <>
      <Link to={`/lists/${listID}`}>
        <h3 className="game-title">{props.list.title}</h3>
      </Link>
      {deleteListButton}
      {editListForm}
    </>
  )
}

export default ListsIndexTile
