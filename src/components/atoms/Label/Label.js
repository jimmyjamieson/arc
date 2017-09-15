// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { LabelProps } from './LabelProps';

const LabelStyle = styled.label`
  font-weight: 500;
`;

class Label extends PureComponent<Object, Object> {
  static propTypes = {
    ...LabelProps,
  };
  render() {
    const { children } = this.props;
    return (
      <LabelStyle>{children}</LabelStyle>
    );
  }
}

export default Label;
