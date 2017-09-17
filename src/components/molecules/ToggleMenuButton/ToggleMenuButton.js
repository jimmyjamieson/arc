// @flow
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleNav } from '../../../store/app/index';

import IconMenu from '../Icons/IconMenu';


class ToggleMenuButton extends PureComponent<Object, Object> {
  render() {
    return (
      <IconMenu onClick={this.props.toggleNav} {...this.props} />
    );
  }
}

const mapStateToProps = (state:Object) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch:Object) => ({
  toggleNav: bindActionCreators(toggleNav, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenuButton);

