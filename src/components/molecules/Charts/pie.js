import React, { PureComponent } from 'react'
import { VictoryPie } from 'victory'

const ChartData = [
  { x: 'Cats', y: 35 },
  { x: 'Dogs', y: 40 },
  { x: 'Birds', y: 55 },
];

class PieChart extends PureComponent {
  render() {
    return (
      <VictoryPie colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']} data={ChartData} />
    )
  }
}

export default PieChart
