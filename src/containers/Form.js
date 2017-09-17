import React, { PureComponent } from 'react';
import Form from '../components/atoms/Form/Form';
import Field from '../components/molecules/Field/Field';

class FormContainer extends PureComponent {
  render() {
    return (
      <Form>
        <Field label="First name" placeholder="e.g John" name="first_name" type="text" />
        <Field label="Last name" placeholder="e.g Snow" name="last_name" type="text" />
      </Form>
    );
  }
}

export default FormContainer;
