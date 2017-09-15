// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import { LabelProps } from '../../atoms/Label/LabelProps';
import { InputProps } from '../../atoms/Input/inputProps';

const InputColumn = styled.div`
  display: inline-block;
  padding: .5rem;
`;

class Field extends PureComponent<Object, Object> {
  static propTypes = {
    ...InputProps,
    ...LabelProps,
  };
  constructor(props:Object) {
    super(props);
    this.value = props.value;
  }
  onChange = (event:Object) => {
    this.value = event.target.value;
    if (this.props.onChange) { this.props.onChange(event); } // Pass the onChange to the parent
    console.log('fieldValue', this.value);
  };
  render() {
    const { name, label, type, placeholder } = this.props;

    let inputType = <Input type={type} placeholder={placeholder} name={name} value={this.value} onChange={this.onChange} />;
    if (type === 'select') {
      inputType = <Select placeholder={placeholder} name={name} value={this.value} onChange={this.onChange} />;
    }

    return (
      <InputColumn>
        { label && <Label>{ label }</Label> }
        {inputType}
      </InputColumn>
    );
  }
}
export default Field;
