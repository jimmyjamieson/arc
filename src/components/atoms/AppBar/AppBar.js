// import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const AppBar = styled.div`
  display: block;
  padding: 0 8rem;
  background: ${palette('primary', 4, true)};
`;

export default AppBar;
