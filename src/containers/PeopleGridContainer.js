// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withServerState } from '../utils/with-server-state';
import DataGrid from '../components/molecules/DataGrid/DataGrid';
import { fetchPeople } from '../store/people/list';
import { isBrowser, isServer } from '../config';

class PeopleGridContainer extends PureComponent<Object, Object> {
  static propTypes = {
    list: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    fetchPeople: PropTypes.func.isRequired,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func.isRequired,
    cleanServerState: PropTypes.func.isRequired,
  };

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

  loadPeople = (params) => {
    fetchPeople(params);
  };

  render() {
    const peopleList = this.props.list;
    const loading = this.props.isLoading;
    console.log('props', this.props);
    const columns = [
      {
        name: 'Name1',
        fieldKey: 'name',
        type: 'text',
        editable: true,
      },
      {
        name: 'Gender',
        fieldKey: 'gender',
        type: 'text',
        editable: true,
      },
      {
        name: 'Birth Year',
        fieldKey: 'birth_year',
        type: 'text',
        editable: true,
      },
      {
        name: 'Height',
        fieldKey: 'height',
        type: 'text',
        editable: true,
      },
      {
        name: 'Mass',
        fieldKey: 'mass',
        type: 'text',
        editable: true,
      },
      {
        name: 'Hair Color',
        fieldKey: 'hair_color',
        type: 'text',
        editable: true,
      },
      {
        name: 'Eye Color',
        fieldKey: 'eye_color',
        type: 'text',
        editable: true,
      },
    ];

    return (
      <DataGrid data={peopleList || []} columns={columns || []} loading={loading} loadData={this.loadPeople} />
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

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(PeopleGridContainer));
