import React from "react"

import Chart from "react-google-charts"

const ChartComponent = (props) => {
  let unplayed = 0
  let started = 0
  let progress = 0
  let progressOne = 0
  let progressTwo = 0
  let beat = 0

  props.games.forEach((game) => {
    switch (game.status) {
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


  return (
    <Chart
    width={'500px'}
    height={'300px'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Status', 'Number of Games'],
      ['Unplayed', unplayed],
      ['Started', started],
      ['Progress', progress],
      ['Progress+', progressOne],
      ['Progress++', progressTwo],
      ['Beat', beat]
    ]}
    options={{
      title: 'Collection Progress',
      colors: ['#471671', '#6F2DBD', '#A663CC', '#B298DC', '#B8D0EB', '#B9FAF8'],
      backgroundColor: '#f4f4ed',
      pieSliceTextStyle: {
      // color: 'black',
      bold: true,
      fontSize: 16
      },
      is3D: true
    }}
    rootProps={{ 'data-testid': '1' }}
    />
  )

}

export default ChartComponent