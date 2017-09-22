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
    list: PropTypes.object.isRequired,
    loading: PropTypes.bool,
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

  render() {
    const peopleList = this.props.list.data.results;
    const loading = this.props.list.loading;
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
      <DataGrid data={peopleList || []} columns={columns || []} loading={loading} />
    );
  }
}

const mapStateToProps = (state:Object) => ({
  list: state.people.list,
});

const mapDispatchToProps = (dispatch:Object) => ({
  fetchPeople: bindActionCreators(fetchPeople, dispatch),
});

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(PeopleGridContainer));
