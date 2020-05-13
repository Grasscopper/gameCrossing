import React, { useState } from "react"

const ListsNewComponent = (props) => {
  let [formPayload, setFormPayload] = useState({
    title: "",
    image: "",
    game_id: props.game.id
  })

  const listSubmit = (event) => {
    event.preventDefault()
    props.postNewList(formPayload)
  }

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return (
    <form autoComplete="off" onSubmit={listSubmit}>
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

      <button type="submit" value="Submit" className="game-buttons">Add New List</button>
    </form>
  )
}

export default ListsNewComponent
