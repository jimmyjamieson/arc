// @flow
import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import { IconProps } from '../../atoms/Icon/IconProps';

const IconAccountCircle = (props:Object) => (
  <Icon {...props} title="Account" icon="M512 85.333c-235.733 0-426.667 190.933-426.667 426.667s190.933 426.667 426.667 426.667 426.667-190.933 426.667-426.667-190.933-426.667-426.667-426.667zM512 213.333c70.613 0 128 57.387 128 128 0 70.827-57.387 128-128 128s-128-57.173-128-128c0-70.613 57.387-128 128-128zM512 819.2c-106.88 0-200.747-54.613-256-137.387 1.067-84.693 170.88-131.413 256-131.413s254.72 46.72 256 131.413c-55.253 82.773-149.12 137.387-256 137.387z" />
);

IconAccountCircle.propTypes = {
  ...IconProps,
};

export default IconAccountCircle;
