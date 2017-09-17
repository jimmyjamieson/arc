// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { DataGridProps, DataGridDefaultProps } from './DataGridProps';
import Field from '../Field/Field';
import DataItem from '../DataItem/DataItem';

const Container = styled.div`
  display: block;
  max-width: 100%;
  min-width: 100%;
  overflow: auto;
`;

const Table = styled.table`
  display: block;
  height: 100%;
  border: solid 1px #efefef;
  border-top: 0px;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background: dodgerblue;
  color: white;
`;

const Tbody = styled.tbody`
`;

const Tr = styled.tr`
  border-bottom: solid 1px #efefef;
`;

const Td = styled.td`
  padding: .6rem;
`;
const Th = styled.th`
  padding: .6rem;
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
    const { data, config, loading, search } = this.props;
    // const filters = this.state.filters;
    /* const filteredItems = data.filter(
      item => Object.entries(filters).map((key, value) =>
        console.log('Item', key + value),
        // item[key].toLowerCase().indexOf(value.toLowerCase()) !== -1,
      ),
      // item => item.name.toLowerCase().includes(this.state.search.toLowerCase()) !== -1,
    ); */
    const filteredData = data.filter(
      item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    );
    // console.log('filteredItems', filteredItems);
    return (
      <Container>
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
      </Container>
    );
  }
}

export default DataGrid;
