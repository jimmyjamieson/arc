// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { DataGridProps, DataGridDefaultProps } from './DataGridProps';
import Field from '../Field/Field';
import DataItem from '../DataItem/DataItem';
import { Table, Thead, Tbody, Th, Tr, Td } from '../../atoms/Table';

const GridContainer = styled.div`
  display: block;
  max-width: 100%;
  min-width: 100%;
  overflow: auto;
`;

class DataGrid extends PureComponent<Object, Object> {
  static propTypes = {
    ...DataGridProps,
  };
  static defaultProps = {
    ...DataGridDefaultProps,
  };
  constructor(props:Object) {
    super(props);
    this.state = {
      search: this.props.search || '',
      filters: {},
    };
  }
  filter = (e:Object) => {
    console.log('state.search', this.state.search);
    this.setState({
      filters:
      {
        ...this.state.filters,
        [e.target.name]: e.target.value,
      },
    });
    console.log('Filters...', this.state.filters);
  };
  render() {
    const { data, config, loading } = this.props;
    const filteredData = data.filter(
      item => item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );
    return (
      <GridContainer>
        { loading ?
          <p>Loading...</p> :
          <Table>
            <Thead>
              <Tr>
                {config.map(header => (
                  <Th key={`header-${header.fieldKey}`}>
                    {header.name}
                    <Field name={header.fieldKey} type={header.type} placeholder={`Filter ${header.name}`} onChange={this.filter} />
                  </Th>
                  ))}
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map(field => (
                <Tr key={field.name}>
                  {config.map(conf => (
                    <Td key={`col-${conf.fieldKey}`}><DataItem name={conf.fieldKey} type={conf.type} value={field[conf.fieldKey]} editable={conf.editable} /></Td>
                    ))}
                </Tr>
                ))}
            </Tbody>
          </Table>
        }
      </GridContainer>
    );
  }
}

export default DataGrid;
