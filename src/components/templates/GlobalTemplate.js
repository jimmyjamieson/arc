
import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'

import GlobalHeader from '../organisms/GlobalHeader/GlobalHeader'
import { ChildrenProp } from '../../utils/props'


injectGlobal`
   *, *:after, *:before {
        box-sizing: border-box;
   }
   html {
    height: 100%;
    min-height: 100%;
    font-size: 1rem;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   }
  body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 100%;
    position: relative;
    margin:0; padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    & > div.root, div.root > div, & #__next, & [data-reactroot] {
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    }
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

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

