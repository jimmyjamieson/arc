// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import GlobalHeader from '../organisms/GlobalHeader/GlobalHeader';
import { ChildrenProp } from '../../utils/props';

const GlobalTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

class GlobalTemplate extends PureComponent<Object, Object> {
  static propTypes = {
    ...ChildrenProp,
  };
  render() {
    return (
      <GlobalTemplateWrapper {...this.props}>
        <GlobalHeader {...this.props} />
        {this.props.children}
      </GlobalTemplateWrapper>
    );
  }
}

export default GlobalTemplate;

