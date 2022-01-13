import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../../../hooks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const RenderRegisterForm = () => {
  const { values, handleChange } = useFormikContext<InitialDataModel>();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Form>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.name}
                onChange={handleChange}
                type={'text'}
                id={'name'}
                name={'name'}
                label={'Name'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.email}
                onChange={handleChange}
                type={'email'}
                id={'email'}
                name={'email'}
                label={'Email'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={values.password}
                onChange={handleChange}
                type={'password'}
                id={'password'}
                name={'password'}
                label={'Password'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={values.passwordConfirmation}
                onChange={handleChange}
                type={'password'}
                id={'passwordConfirmation'}
                name={'passwordConfirmation'}
                label={'Password Confirmation'}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Grid>
        </Form>
      </Box>
    </Container>
  );
};
