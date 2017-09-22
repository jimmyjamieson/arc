// @flow
import PropTypes from 'prop-types';

const DataGridProps = {
  data: PropTypes.array.isRequired,
  config: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  search: PropTypes.string,
};

const DataGridDefaultProps = {
  loading: false,
};

export { DataGridProps, DataGridDefaultProps };
