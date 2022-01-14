import { FormikHelpers } from 'formik';
import { LoginCommands } from '../../services/login';
import { NotificationsDispatch } from '../../components';
import { useNavigate } from 'react-router-dom';

export const useLoginFormFacade = () => {
  const history = useNavigate();
  const loginCommands = new LoginCommands();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitForm = async (values: InitialLoginDataModel) => {
    const newUser = {
      email: values.email,
      password: values.password,
    };

    return loginCommands
      .loginUser(newUser)
      .then((response) => {
        if (!response.status) {
          NotificationsDispatch({
            msg: response.message,
            variant: 'error',
          });
        } else {
          const accessToken = response.data?.token;
          const userLogged = 'true';
          localStorage.setItem('access-token', accessToken);
          localStorage.setItem('user-logged', userLogged);

          history('/dashboard');

          NotificationsDispatch({
            msg: response.message,
            variant: 'success',
          });
        }
      })
      .catch((error) => {
        console.log('erorr', error);
        NotificationsDispatch({
          msg: `Coś poszło nie tak...`,
          variant: 'error',
        });
      });
  };

  return { initialValues, handleSubmitForm };
};

export type InitialLoginDataModel = {
  email: string;
  password: string;
};
