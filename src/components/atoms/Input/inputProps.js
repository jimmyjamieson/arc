// @flow
import PropTypes from 'prop-types';

const InputProps = {
  name: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

const InputDefaultProps = {
  name: '',
  value: '',
  placeholder: '',
};

export { InputProps, InputDefaultProps };
