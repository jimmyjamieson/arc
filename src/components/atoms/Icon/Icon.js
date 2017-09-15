// @flow
import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { IconProps } from './IconProps'
// import Icons from './Icons'

injectGlobal`
  @font-face {
    font-family: "Material Design Icons";
    src: url("/fonts/materialdesignicons-webfont.eot");
    src: url("/fonts/materialdesignicons-webfont.eot") format("embedded-opentype"), 
    url("/fonts/materialdesignicons-webfont.woff2") format("woff2"), 
    url("/fonts/materialdesignicons-webfont.woff") format("woff"), 
    url("/fonts/materialdesignicons-webfont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`

const IconStyle = styled.i`
  font-style: normal;
  &::before {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

class Icon extends PureComponent {
  static propTypes = {
    ...IconProps,
  };
  render() {
    const { icon } = this.props;

    return (
      <IconStyle className={`mdi mdi-${icon}`} />
    )
  }
}

export default Icon
