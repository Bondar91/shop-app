import React from 'react';
import { Formik } from 'formik';
import { useRegisterFormFacade } from '../../../hooks';
import { RenderRegisterForm } from '.';
import { registerValidationSchema } from '../../../utils';

export const RegisterForm = () => {
  const { initialValues, handleSubmitForm } = useRegisterFormFacade();

  return (
    <div>
      <Formik
        validateOnChange
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={registerValidationSchema}
      >
        {({ values, errors, handleChange }) => <RenderRegisterForm />}
      </Formik>
    </div>
  );
};
