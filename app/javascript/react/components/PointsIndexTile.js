import React, { useState } from "react"

const PointsIndexTile = (props) => {
  let [formPayload, setFormPayload] = useState({
    title: props.point.title
  })
  let pointID = props.id

  const sendDeletionPoint = (event) => {
    event.preventDefault()
    props.deletePoint(pointID)
  }

  let deletePointButton = null
  if (props.deletion) {
    deletePointButton = <button className="game-buttons" onClick={sendDeletionPoint} id="delete-point">Delete Point</button>
  }

  const sendEditPoint = (event) => {
    event.preventDefault()
    props.fetchEditPoint(pointID, formPayload)
  }

  const update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  let editPointForm = null
  if (props.edit) {
    editPointForm = <form autoComplete="off" onSubmit={sendEditPoint}>
      <label htmlFor="title">List Bullet</label>
      <input
        id="title"
        name="title"
        type="text"
        className="text-center list-bullet"
        onChange={update}
        value={formPayload.title}
      />
      <button type="submit" value="Submit" className="game-buttons">Edit Point</button>
    </form>
  }



  return (
    <>
      <p id="point-title">• {props.point.title}</p>
      {deletePointButton}
      {editPointForm}
    </>
  )
}

export default PointsIndexTile
