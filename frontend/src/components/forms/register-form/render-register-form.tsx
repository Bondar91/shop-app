import { useFormikContext, Form } from 'formik';
import { InitialDataModel } from '../../../hooks';
import { Input } from '../../';
import { Button, Grid, Box, Typography, Container } from '@mui/material';

export const RenderRegisterForm = () => {
  const { values, errors, handleChange } = useFormikContext<InitialDataModel>();

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
              <Input
                value={values.name}
                id={'name'}
                name={'name'}
                label={'Name'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                value={values.email}
                type={'email'}
                id={'email'}
                name={'email'}
                label={'Email'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                value={values.password}
                type={'password'}
                id={'password'}
                name={'password'}
                label={'Password'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                value={values.passwordConfirmation}
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
