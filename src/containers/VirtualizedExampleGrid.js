import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withServerState } from '../utils/with-server-state';
import { fetchPeople } from '../store/people/list';
import { isBrowser, isServer } from '../config';

import { Grid } from 'react-virtualized';

function cellRenderer() {
  <div>some cell</div>;
}

class VirtualizedExampleGrid extends PureComponent {

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
    return (
      <Grid
        cellRenderer={cellRenderer}
        columnCount={10}
        columnWidth={100}
        rowCount={10}
        rowHeight={50}
        width={500}
        height={400}
      />
    );
  }
}

const mapStateToProps = (state:Object) => ({
  list: state.people.list,
});

const mapDispatchToProps = (dispatch:Object) => ({
  fetchPeople: bindActionCreators(fetchPeople, dispatch),
});

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(VirtualizedExampleGrid));
