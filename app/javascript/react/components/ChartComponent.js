import React, { useState, useEffect } from "react"

import Chart from "react-google-charts"

const ChartComponent = (props) => {
  let [chartSlices, setChartSlices] = useState({
    unplayed: 0,
    started: 0,
    progress: 0,
    progressOne: 0,
    progressTwo: 0,
    beat: 0
  })
  useEffect(() => {
    fetch('/api/v1/games/chart')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}: ${response.statusText}`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((slices) => {
      let unplayed = 0
      let started = 0
      let progress = 0
      let progressOne = 0
      let progressTwo = 0
      let beat = 0
      slices.forEach((slice) => {
        switch (slice) {
          case 'unplayed':
          unplayed++
          break
          case 'started':
          started++
          break

          case 'progress':
          progress++
          break

          case 'progressOne':
          progressOne++
          break

          case 'progressTwo':
          progressTwo++
          break

          case 'beat':
          beat++
          break
        }
      })
      setChartSlices({
        unplayed: unplayed,
        started: started,
        progress: progress,
        progressOne: progressOne,
        progressTwo: progressTwo,
        beat: beat
      })
    })
    .catch((error) => {
      console.error(`Error in fetching games: ${error.message}`)
    })
  }, [props.games]) //use effect end

  //
  // props.games.forEach((game) => {
  //   switch (game.status) {
  //     case 'unplayed':
  //     unplayed++
  //     break
  //     case 'started':
  //     started++
  //     break
  //
  //     case 'progress':
  //     progress++
  //     break
  //
  //     case 'progressOne':
  //     progressOne++
  //     break
  //
  //     case 'progressTwo':
  //     progressTwo++
  //     break
  //
  //     case 'beat':
  //     beat++
  //     break
  //   }
  // })
  //
  // const sumOfChart = () => {
  //   let sum = 0
  //   sum += unplayed
  //   sum += started
  //   sum += progress
  //   sum += progressOne
  //   sum += progressTwo
  //   sum += beat
  //   return sum
  // }

  // if (props.games.length - sumOfChart() === 1) { //if new game added
  // }
  //last two colors possibly: #B8D0EB, #B9FAF8
  //last two colors possibly: #A5FFD6, #83DCC6
  // width={'500px'}
  // height={'300px'}
  return (
    <div className="grid-container">
    <Chart
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Status', 'Number of Games'],
      ['Unplayed', chartSlices.unplayed],
      ['Started', chartSlices.started],
      ['Progress', chartSlices.progress],
      ['Progress+', chartSlices.progressOne],
      ['Progress++', chartSlices.progressTwo],
      ['Beat', chartSlices.beat]
    ]}
    options={{
      title: 'Collection Progress',
      colors: ['#471671', '#6F2DBD', '#A663CC', '#B298DC', '#B8D0EB', '#B9FAF8'],
      backgroundColor: '#f4f4ed',
      pieSliceTextStyle: {
      bold: true,
      fontSize: 16
      },
      is3D: true,
      chartArea: {width: 500, height: 300}
    }}
    rootProps={{ 'data-testid': '1' }}
    />
    </div>
  )

}

export default ChartComponent
