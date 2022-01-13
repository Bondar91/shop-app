import { FormikHelpers } from 'formik';
import { RegisterCommands } from '../../services';
import { NotificationsDispatch } from '../../components';

export const useRegisterFormFacade = () => {
  const registerCommands = new RegisterCommands();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmitForm = async (
    values: InitialDataModel,
    formikHelpers: FormikHelpers<InitialDataModel>,
  ) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.passwordConfirmation,
    };

    return registerCommands
      .create(newUser)
      .then((response) => {
        console.log(response.status);
        formikHelpers.resetForm();
        NotificationsDispatch({
          msg: response.message,
          variant: 'success',
        });
      })
      .catch((error) => {
        console.log('erorr', error);
      });
  };

  return { initialValues, handleSubmitForm };
};

export type InitialDataModel = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};
