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
          className="text-center"
          onChange={update}
          value={formPayload.title}
          />

      <button type="submit" value="Submit" className="new-list-buttons">Add new point</button>
    </form>
  )
}

export default PointsNewComponent

// <div className="grid-x">
//   <div className="small-12 medium-6">
//     <label htmlFor="title">Title</label>
//     <input
//     id="title"
//     name="title"
//     type="text"
//     className="text-center"
//     onChange={update}
//     value={formPayload.title}
//     />
//   </div>
// </div>