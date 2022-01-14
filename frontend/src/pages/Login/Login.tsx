import React from 'react';
import { LoginForm } from '../../components';
import { Container, Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <React.Fragment>
      <LoginForm />
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
            Do you haven`t account? Please
            <Link to="/register"> Register</Link>
          </Typography>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
