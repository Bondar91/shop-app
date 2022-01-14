import React from 'react';
import { Formik } from 'formik';
import { useLoginFormFacade } from '../../../hooks';
import { RenderLoginForm } from '.';
import { loginValidationSchema } from '../../../utils';

export const LoginForm = () => {
  const { initialValues, handleSubmitForm } = useLoginFormFacade();

  return (
    <div>
      <Formik
        validateOnChange
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={loginValidationSchema}
      >
        {({ values, errors, handleChange }) => <RenderLoginForm />}
      </Formik>
    </div>
  );
};
