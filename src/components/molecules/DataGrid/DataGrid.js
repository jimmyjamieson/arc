import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DataScroller } from 'primereact/components/datascroller/DataScroller';

class DataGrid extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
    };
    this.GridRowTemplate = this.GridRowTemplate.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      columns: nextProps.columns,
    });
  }
  GridRowTemplate(row) {
    // console.log('Row', row);
    return (
      <div>{row.name}</div>
    );
  }
  render() {
    // console.log('Data', this.state.data);
    return (
      <DataScroller value={this.state.data} itemTemplate={this.GridRowTemplate} rows={10} />
    );
  }
}
export default DataGrid;
