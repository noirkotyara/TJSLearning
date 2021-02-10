import React from 'react';
import './App.css';
import {  Field, Form, Formik, FormikHelpers } from 'formik';
import { Func } from './components/hoc';
import { JsLearning } from './components/JsLearning';
const _ = require('lodash');

type ErrorsType = {
  email?: string
}

type FormType = {
  term: string
  friend: 'null' | 'true' | 'false'
}

let App = () => {



  const onSubmit = (values: FormType, { setSubmitting }: FormikHelpers<FormType>) => {
    debugger
    const valuesConverted = {...values, 
    friend: values.friend === 'null' 
    ? null 
    : values.friend === 'true' 
    ? true 
    : values.friend === 'false' 
    && false}   
    console.log(valuesConverted)
    setSubmitting(false);
  }
  const validate = (values: ErrorsType) => {
    const errors: ErrorsType = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  return (<div>

    <div>
      <JsLearning/>
    </div>
    <div> <Func title='function' name='cat'  /> </div>
    This is an example Formik
    <div>
      <Formik
        initialValues={{ term: '', friend: 'null' }}
        // validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            {/* <ErrorMessage name="email" component="div" /> */}
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Submit
           </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>)
}

export default App;
