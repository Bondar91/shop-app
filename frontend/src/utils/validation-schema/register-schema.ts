import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('No correct email address')
    .required('Email is required'),
  password: yup.string().required('Password is srequired'),
  passwordConfirmation: yup
    .string()
    .required('Password Confirmation is required')
    .test('passwords-match', 'Password must match', function (value) {
      return this.parent.password === value;
    }),
});
