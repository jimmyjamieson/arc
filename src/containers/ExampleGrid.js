// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchState } from 'react-router-server';
import { connect } from 'react-redux';
import DataGrid from '../components/molecules/DataGrid/DataGrid';
import { fetchPeople } from '../store/people/list';
import { isBrowser, isServer } from '../config';

class ExampleGrid extends PureComponent<Object, Object> {
  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    search: PropTypes.object,
    fetchPeople: PropTypes.func.isRequired,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func.isRequired,
    cleanServerState: PropTypes.func.isRequired,
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
    const peopleList = this.props.people.data.results;
    const loading = this.props.people.loading;
    const search = this.props.search;
    console.log('props', this.props);
    const config = [
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
      <DataGrid data={peopleList || []} config={config || []} dataAction="" search={search} loading={loading} />
    );
  }
}

const mapStateToProps = (state:Object) => ({
  people: state.people.list,
});

const mapDispatchToProps = (dispatch:Object) => ({
  fetchPeople: bindActionCreators(fetchPeople, dispatch),
});

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: data => actions.done({ data }),
    cleanServerState: () => actions.done(),
  })
);

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(ExampleGrid));
