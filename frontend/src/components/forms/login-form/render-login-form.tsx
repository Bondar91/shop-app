import { useFormikContext, Form } from 'formik';
import { InitialLoginDataModel } from '../../../hooks';
import { Input } from '../..';
import { Button, Grid, Box, Typography, Container } from '@mui/material';

export const RenderLoginForm = () => {
  const { values, errors, handleChange } =
    useFormikContext<InitialLoginDataModel>();

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
            Log in
          </Typography>
          <Grid container spacing={2}>
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
            <Grid item xs={12}>
              <Input
                value={values.password}
                type={'password'}
                id={'password'}
                name={'password'}
                label={'Password'}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" fullWidth>
              Log in
            </Button>
          </Grid>
        </Form>
      </Box>
    </Container>
  );
};
