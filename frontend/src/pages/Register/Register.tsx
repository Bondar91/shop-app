import React from 'react';
import { RegisterForm } from '../../components';
import { Container, Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <React.Fragment>
      <RegisterForm />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ></Box>
        <Grid>
          <Typography variant="h6" component="h1">
            Do you have account? Please <Link to="/login">Login</Link>
          </Typography>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
