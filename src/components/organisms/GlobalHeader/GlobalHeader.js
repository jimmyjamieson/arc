// @flow
import React from 'react';
import styled from 'styled-components';
import IconMenu from '../../molecules/Icons/IconMenu';
import Link from '../../atoms/Link/Link';
// import OfflineIndicator from '../../molecules/OfflineIndicator/OfflineIndicator';

const GlobalHeaderStyle = styled.div`
  display: flex;
  align-content: space-around;
  align-items: center;
  height: 60px;
  background: lightseagreen;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  padding: 0 .8rem;
`;

const CenterColumn = styled(HeaderColumn)`
  flex-grow: 1;
`;

const GlobalHeader = () => (
  <GlobalHeaderStyle>
    <HeaderColumn>
      <IconMenu color="white" />
    </HeaderColumn>
    <CenterColumn>
      <Link to="/" exact activeClassName="active">Home</Link>
      <Link to="/grids" exact activeClassName="active">Grids</Link>
      <Link to="/forms" exact activeClassName="active">Forms</Link>
      <Link to="/charts" exact activeClassName="active">Charts</Link>
    </CenterColumn>
    <HeaderColumn>
      <IconMenu color="white" />
    </HeaderColumn>
  </GlobalHeaderStyle>
);

export default GlobalHeader;

