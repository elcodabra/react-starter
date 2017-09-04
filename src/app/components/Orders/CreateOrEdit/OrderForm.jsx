import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, number } from '../../../services/validation';

const renderField = ({
  input,
  label,
  type,
  meta: {touched, error, warning}
}) => (
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error &&
        <span>
          {error}
        </span>) ||
        (warning &&
          <span>
            {warning}
          </span>))}
    </div>
  </div>
)

class OrderForm extends React.Component {
  render() {
    const {handleSubmit, pristine, reset, submitting, valid} = this.props;
    return (
      <div>
        <Field
          name="title" label="title" type="text"
          component={renderField}
          validate={[required]}
        />
        <Field
          name="body" label="body" type="text"
          component={renderField}
          validate={[required, number]}
        />
        <div>
          <button disabled={submitting} onClick={handleSubmit}>Submit</button>
          <button disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </div>
    );
  }
}

export default reduxForm({form: 'order'})(OrderForm);