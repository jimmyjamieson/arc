// @flow
import React from 'react';
import styled from 'styled-components';

import Icon from '../../atoms/Icon/Icon';

const IconMenuStyle = styled(Icon)`
  &:before {
    content: "\F35C";
  }
`;

const IconMenu = props => (
  <IconMenuStyle icon="menu" {...props} />
);

export default IconMenu;
