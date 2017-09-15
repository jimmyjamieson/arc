import React, { PureComponent } from 'react'
import { Chart } from 'react-d3-core'
import { PieChart as D3PieChart } from 'react-d3-basic'

const ChartData = [
  {
    name: 'Lavon Hilll I',
    BMI: 20.57,
    age: 12,
    birthday: '1994-10-26T00:00:00.000Z',
    city: 'Annatown',
    married: true,
    index: 1,
  },
  {
    name: 'Clovis Pagac',
    BMI: 24.28,
    age: 26,
    birthday: '1995-11-10T00:00:00.000Z',
    city: 'South Eldredtown',
    married: false,
    index: 3,
  },
  {
    name: 'Gaylord Paucek',
    BMI: 24.41,
    age: 30,
    birthday: '1975-06-12T00:00:00.000Z',
    city: 'Koeppchester',
    married: true,
    index: 5,
  },
  {
    name: 'Ashlynn Kuhn MD',
    BMI: 23.77,
    age: 32,
    birthday: '1985-08-09T00:00:00.000Z',
    city: 'West Josiemouth',
    married: false,
    index: 6,
  },
]

class PieChart extends PureComponent {
  render() {
    return (
      <Chart title="Test Pie Chart" width="100%" height="550px">
        <D3PieChart data={ChartData} />
      </Chart>
    )
  }
}

export default PieChart
