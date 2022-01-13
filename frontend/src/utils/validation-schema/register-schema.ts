import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Imię i nazwisko jest wymagane'),
  email: yup
    .string()
    .email('Niepoprawny adres Email')
    .required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane'),
  passwordConfirmation: yup.string().required('Potwierdź hasło jest wymagane'),
});
