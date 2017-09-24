import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DataScroller } from 'primereact/components/datascroller/DataScroller';

class DataGrid extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    load: PropTypes.func,
    loadData: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
      filters: [],
    };
    this.GridRowTemplate = this.GridRowTemplate.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      columns: nextProps.columns,
    });
  }
  load = (event) => {
    console.log('Event', event);
    this.props.loadData();
  };
  GridRowTemplate(row) {
    // console.log('Row', row);
    return (
      <div>{row.name}</div>
    );
  }
  render() {
    // console.log('Data', this.state.data);
    return (
      <DataScroller value={this.state.data} itemTemplate={this.GridRowTemplate} rows={20} lazy={true} onLazyLoad={this.props.load} header="Scroll Down to to Load More" />
    );
  }
}
export default DataGrid;
