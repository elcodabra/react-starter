import React from 'react';
import BackendService from '../../../services/backend';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

export const required = value => value ? undefined : 'Field is required';

const renderField = ({
  input,
  placeholder,
  type,
  meta: {touched, error, warning}
}) => (

  <div>
    <textarea
      className={classnames("form-control", {"is-invalid": touched && error})}
      {...input} type={type} placeholder={placeholder}>
    </textarea>
    {touched && error &&
      <div className="invalid-feedback">
        {error}
      </div>
    }
  </div>
)

class CreateTweet extends React.Component {
  render() {
    const {handleSubmit, pristine, reset, submitting, valid} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            type="text"
            name="content"
            placeholder={this.props.placeholder}
            component={renderField}
            validate={[required]}
          />
        </div>
        <button
          type="submit"
          className={classnames("btn","btn-primary")}
          disabled={!valid}>
          Submit
        </button>
      </form>
    )
  }
}

export default reduxForm({form: 'tweet'})(CreateTweet);