// @flow
import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import IconMenu from '../../molecules/Icons/IconMenu';
import Link from '../../atoms/Link/Link';
import IconAccountCircle from '../../molecules/Icons/IconAccountCircle';

// import OfflineIndicator from '../../molecules/OfflineIndicator/OfflineIndicator';

const HeaderWrapper = styled.div`
  display: block;
  background: ${palette('primary', 4, true)};
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const HeaderInner = styled.div`
  display: flex;
  flex-grow: 1;
  align-content: space-between;
  align-items: stretch;
  height: 60px;
`;

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .8rem;
`;

const CenterColumn = styled(HeaderColumn)`
  flex-grow: 1;
  justify-content: space-around;
`;

const GlobalHeader = () => (
  <HeaderWrapper>
    <HeaderInner>
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
        <IconAccountCircle color="white" />
      </HeaderColumn>
    </HeaderInner>
  </HeaderWrapper>
);

export default GlobalHeader;

