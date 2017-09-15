import PropTypes from 'prop-types';

export const ChildrenProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.any,
]).isRequired;

export const SizeProps = PropTypes.oneOf(
  [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ],
);
