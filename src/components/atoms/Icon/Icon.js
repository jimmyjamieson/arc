// @flow
import React, { PureComponent } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { IconProps } from './IconProps';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: "Material Design Icons";
    src: url("static/fonts/materialdesignicons-webfont.eot");
    src: url("static/fonts/materialdesignicons-webfont.eot") format("embedded-opentype"), 
    url("static/fonts/materialdesignicons-webfont.woff2") format("woff2"), 
    url("static/fonts/materialdesignicons-webfont.woff") format("woff"), 
    url("static/fonts/materialdesignicons-webfont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

const IconStyle = styled.i`
  font-style: normal;
  &:before {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class Icon extends PureComponent<Object, Object> {
  static propTypes = {
    ...IconProps,
  };
  render() {
    const { icon } = this.props;

    return (
      <IconStyle className={`mdi mdi-${icon}`} />
    );
  }
}

export default Icon;
