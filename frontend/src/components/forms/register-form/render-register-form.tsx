import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../../../hooks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RenderRegisterForm = () => {
  const { values, handleChange } = useFormikContext<InitialDataModel>();

  return (
    <Form>
      <TextField
        value={values.name}
        onChange={handleChange}
        type={'text'}
        id={'name'}
        name={'name'}
        label={'Name'}
      />
      <TextField
        value={values.email}
        onChange={handleChange}
        type={'email'}
        id={'email'}
        name={'email'}
        label={'Email'}
      />
      <TextField
        value={values.password}
        onChange={handleChange}
        type={'password'}
        id={'password'}
        name={'password'}
        label={'Password'}
      />
      <TextField
        value={values.passwordConfirmation}
        onChange={handleChange}
        type={'password'}
        id={'passwordConfirmation'}
        name={'passwordConfirmation'}
        label={'Password Confirmation'}
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Form>
  );
};
