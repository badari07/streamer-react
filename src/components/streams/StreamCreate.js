import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamCreate = ({ handleSubmit }) => {
  const renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter description";
  }
  return errors;
};

export default reduxForm({ form: "StreamCreate", validate })(StreamCreate);
