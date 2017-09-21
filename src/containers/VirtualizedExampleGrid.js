// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Immutable from "immutable";
import { AutoSizer, Grid } from 'react-virtualized';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withServerState } from '../utils/with-server-state';
import { fetchPeople } from '../store/people/list';
import { isBrowser, isServer } from '../config';
import { Loader } from '../components/atoms/Loader/Loader';

class VirtualizedExampleGrid extends PureComponent<Object, Object> {

  static propTypes = {
    isLoading: PropTypes.bool,
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    fetchPeople: PropTypes.func,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func,
    cleanServerState: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list || [],
    };
  }

  componentWillMount() {
    const { fetchPeople, hasServerState, setServerState, cleanServerState } = this.props;

    if (!hasServerState) {
      if (isServer) {
        fetchPeople().then(setServerState, setServerState);
      } else {
        fetchPeople();
      }
    } else if (isBrowser) {
      cleanServerState();
    }
  }

  render() {
    const { list, isLoading } = this.props;
    console.log('List', list);
    if (isLoading) { return <Loader />; }
    function cellRenderer({ columnIndex, key, rowIndex, style }) {
      console.log('ListColumnIndex', list[columnIndex], 'ListRowIndex', list[rowIndex], rowIndex, columnIndex, key);
      return (
        <div key={key} style={style}>{list[rowIndex][columnIndex]}</div>
      );
    }
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            cellRenderer={({ columnIndex, isScrolling, rowIndex, key }) => <div key={key} />}
            columnCount={10}
            columnWidth={100}
            rowCount={20}
            rowHeight={50}
            width={width}
            height={height}
          />)}
      </AutoSizer>
    );
  }
}

const mapStateToProps = (state:Object) => ({
  isLoading: state.people.list.loading,
  list: state.people.list.data.results,
});

const mapDispatchToProps = (dispatch:Object) => ({
  fetchPeople: bindActionCreators(fetchPeople, dispatch),
});

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(VirtualizedExampleGrid));
