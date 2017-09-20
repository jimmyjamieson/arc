// @flow
import React, { PureComponent } from 'react';
import { IconDefaultProps, IconProps } from './IconProps';

class Icon extends PureComponent<Object, Object> {
  static propTypes = {
    ...IconProps,
  };
  static defaultProps = {
    ...IconDefaultProps,
  };
  render() {
    const { icon, size, color, title, ...rest } = this.props;

    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024" aria-labelledby="title" {...rest}>
        <title id="title">{title}</title>
        <path fill={color} d={icon} />
      </svg>
    );
  }
}

export default Icon;
