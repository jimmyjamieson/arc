// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { InputDefaultProps, InputProps } from './inputProps';

const InputStyle = styled.input`
  border: solid 1px #ccc;
  background: #efefef;
  width: 100%;
`;

class Input extends PureComponent<Object, Object> {
  static propTypes = {
    ...InputProps,
  };
  static defaultProps = {
    ...InputDefaultProps,
  };
  onChange = (event:Object) => {
    this.value = event.target.value;
    if (this.props.onChange) { this.props.onChange(event); } // Pass the onChange to the parent
    console.log('inputValue', this.value);
  };
  value: ''; // Make this work
  render() {
    const { name, placeholder } = this.props;

    return (
      <InputStyle
        name={name}
        placeholder={placeholder}
        value={this.value}
        onChange={this.onChange}
      />
    );
  }
}

export default Input;
