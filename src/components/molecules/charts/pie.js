import React, { PureComponent } from 'react'
import { PieChart as D3PieChart } from 'react-d3-basic'

class PieChart extends PureComponent {
  render() {
    const { data, settings } = this.props;
    return (
      <D3PieChart />
    )
  }
}

export default PieChart
