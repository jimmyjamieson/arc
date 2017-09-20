import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, Grid } from 'react-virtualized';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withServerState } from '../utils/with-server-state';
import { fetchPeople } from '../store/people/list';
import { isBrowser, isServer } from '../config';

class VirtualizedExampleGrid extends PureComponent {

  static propTypes = {
    list: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
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
    const { list } = this.props;
    function cellRenderer({ columnIndex, key, rowIndex }) {
      return (
        <div key={key}>{/*{list} */}some cell</div>
      );
    }
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            cellRenderer={cellRenderer}
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
