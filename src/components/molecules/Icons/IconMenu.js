// @flow
import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import { IconProps } from '../../atoms/Icon/IconProps';

const IconMenu = (props:Object) => (
  <Icon title="Menu" icon="M128 768h768v-85.333h-768v85.333zM128 554.667h768v-85.333h-768v85.333zM128 256v85.333h768v-85.333h-768z" {...props} />
);

IconMenu.propTypes = {
  ...IconProps,
};

export default IconMenu;
