import React from "react"

const ProgressIndexTile = (props) => {
  return (
    <>
      <button id="unplayed" className={props.status.unplayed} onClick={props.statusClicked}>
      Unplayed</button>

      <button id="started" className={props.status.started} onClick={props.statusClicked}>
      Started</button>

      <button id="progress" className={props.status.progress} onClick={props.statusClicked}>
      Progress</button>

      <button id="progressOne" className={props.status.progressOne} onClick={props.statusClicked}>
      Progress+</button>

      <button id="progressTwo" className={props.status.progressTwo} onClick={props.statusClicked}>
      Progress++</button>

      <button id="beat" className={props.status.beat} onClick={props.statusClicked}>
      Beat</button>
    </>
  )
}

export default ProgressIndexTile
