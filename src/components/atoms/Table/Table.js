// @flow
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  display: block;
  max-width: 100%;
  min-width: 100%;
  overflow: auto;
`;

const TableStyle = styled.table`
  display: block;
  height: 100%;
  border: solid 1px #efefef;
  border-top: 0;
  border-collapse: collapse;
`;

const Table = (props: Object) => {
  return (
    <TableWrapper>
      <TableStyle>
        {props.children}
      </TableStyle>
    </TableWrapper>
  );
};

export default Table;
