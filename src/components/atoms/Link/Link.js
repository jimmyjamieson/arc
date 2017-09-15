// @flow
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkStyle = styled(Link)`
    color: white;
`;

export default (props) => (
  <LinkStyle {...props} />
);
