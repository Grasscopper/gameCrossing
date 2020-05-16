import React, { useState } from "react"

const PointsNewComponent = (props) => {
  let [formPayload, setFormPayload] = useState({
    title: "",
    list_id: props.list.id
  })

  const pointSubmit = (event) => {
    event.preventDefault()
    props.postNewPoint(formPayload)
  }

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return (
    <form autoComplete="off" onSubmit={pointSubmit}>
          <label htmlFor="title">List Bullet</label>
          <input
          id="title"
          name="title"
          type="text"
          className="text-center list-bullet"
          onChange={update}
          value={formPayload.title}
          />

      <button type="submit" value="Submit" className="game-buttons">Add New Point</button>
    </form>
  )
}

export default PointsNewComponent
