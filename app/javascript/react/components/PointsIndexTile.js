import React from "react"

const PointsIndexTile = (props) => {
  let pointID = props.id

  const sendDeletionPoint = (event) => {
    event.preventDefault()
    props.deletePoint(pointID)
  }

  let deletePointButton = null
  if (props.deletion) {
    deletePointButton = <button className="game-buttons" onClick={sendDeletionPoint}>Delete Point</button>
  }

  return (
    <>
      <p>{props.point.title}</p>
      {deletePointButton}
    </>
  )
}

export default PointsIndexTile
