import * as React from 'react';
import { ReactElement } from 'react';
import DashLayout from 'Components/Layout/dash';
import {Container, Typography, Grid, Paper } from '@material-ui/core';
import Orders from 'Dash-components/Orders';

export default function Book() {
  return (
    <React.Fragment> 
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

Book.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}