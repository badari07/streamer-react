import React from "react";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actionCreates/index";
import { connect } from "react-redux";

const StreamCreate = ({ handleSubmit, createStream }) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };
  const onSubmit = (formValues) => {
    createStream(formValues);
  };
  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
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

const formWarped = reduxForm({ form: "StreamCreate", validate })(StreamCreate);
export default connect(null, { createStream })(formWarped);
