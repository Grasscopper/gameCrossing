import React, { useState } from "react"

const GamesNewComponent = (props) => {
  let [formPayload, setFormPayload] = useState({
    title: "",
    image: "",
    start_date: "",
    time_played: "",
    progress: "",
    user_id: props.currentUser.id
  })

  const gameSubmit = (event) => {
    event.preventDefault()
    props.postNewGame(formPayload)
  }

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return (
    <form autoComplete="off" onSubmit={gameSubmit}>
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

      <div className="grid-x">
        <div className="small-12 medium-6">
          <label htmlFor="start_date">First Played</label>
          <input
          id="start_date"
          name="start_date"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.start_date}
          />
        </div>

        <div className="small-12 medium-6">
          <label htmlFor="time_played">Time Played</label>
          <input
          id="time_played"
          name="time_played"
          type="text"
          className="text-center"
          onChange={update}
          value={formPayload.time_played}
          />
        </div>
      </div>

      <div className="small-12">
        <label htmlFor="progress">Notes</label>
        <textarea
        id="progress"
        name="progress"
        type="text"
        rows="3"
        onChange={update}
        value={formPayload.progress}
        />
      </div>

      <button type="submit" value="Submit" id="add-new-game">Add New Game</button>
    </form>
  )
}

export default GamesNewComponent
