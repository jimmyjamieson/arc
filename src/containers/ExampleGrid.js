// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withServerState } from '../utils/with-server-state';
import DataGrid from '../components/molecules/DataGrid/DataGrid';
import { fetchPeople } from '../store/people/list';
import { isBrowser, isServer } from '../config';
import AppBar from '../components/atoms/AppBar/AppBar';
import Field from '../components/molecules/Field/Field';
import Container from '../components/atoms/Container/Container';

class ExampleGrid extends PureComponent<Object, Object> {
  static propTypes = {
    people: PropTypes.object.isRequired,
    loading: PropTypes.bool,
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

  searchValue:String;
  search = (e:Object) => {
    this.searchValue = e.target.value;
    console.log('searchValue', this.searchValue);
  };

  render() {
    const peopleList = this.props.people.data.results;
    const loading = this.props.people.loading;
    console.log('props', this.props, 'searchValue', this.searchValue);
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
      <div>
        <AppBar><Field name="search" placeholder="Search..." onChange={this.search} /></AppBar>
        <Container>
          <DataGrid data={peopleList || []} config={config || []} dataAction="" search={this.searchValue} loading={loading} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state:Object) => ({
  people: state.people.list,
});

const mapDispatchToProps = (dispatch:Object) => ({
  fetchPeople: bindActionCreators(fetchPeople, dispatch),
});

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(ExampleGrid));
