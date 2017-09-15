// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text/Text';
import Field from '../Field/Field';

class DataItem extends PureComponent<Object, Object> {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    editable: PropTypes.bool,
    toggleEdit: PropTypes.func,
  };
  static defaultProps = {
    name: '',
    value: '',
    type: 'text',
    editable: false,
    toggleEdit: null,
  };

  constructor(props:Object) {
    super(props);
    this.state = { editing: false };
  }
  state: Object;

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
    // console.log('DataItem', this.state.editing);
  };

  keyPress = (e:Object) => {
    if (e.keyCode === 13) {
      this.toggleEdit();
    }
  };

  render() {
    const { name, value, type, editable } = this.props;

    switch (type) {
      case 'text':
        return (!this.state.editing && editable ?
          <Text
            onDoubleClick={this.toggleEdit}
          >{value}
          </Text> :
          <Field
            name={name}
            type={type}
            value={value}
            onDoubleClick={this.toggleEdit}
            onKeyPress={this.keyPress}
          />);
        // break;
      case 'select':
        return (<Text>{value}</Text>);
        // break;
      default:
        return (<Text>{value}</Text>);
    }
  }
}


export default DataItem;
