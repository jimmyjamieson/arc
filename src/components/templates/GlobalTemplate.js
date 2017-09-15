
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import GlobalHeader from '../organisms/GlobalHeader/GlobalHeader'
import { ChildrenProp } from '../../utils/props'

const GlobalTemplateWrapper = styled.div`
  flex: 1 0;
`;

class GlobalTemplate extends PureComponent {
  static propTypes = {
    ...ChildrenProp,
  };
  render() {
    return (
      <GlobalTemplateWrapper>
        <GlobalHeader />
        {this.props.children}
      </GlobalTemplateWrapper>
    )
  }
}

export default GlobalTemplate

