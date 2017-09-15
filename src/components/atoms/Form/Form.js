// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ChildrenProp } from '../../../utils/props';

const FormStyle = styled.form`
  display: block;
`;

class Form extends PureComponent<Object, Object> {
  static propTypes = {
    ...ChildrenProp,
  };
  render() {
    const { children } = this.props;
    return (
      <FormStyle>{children}</FormStyle>
    );
  }
}

export default Form;
