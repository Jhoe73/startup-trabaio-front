import * as React from 'react';
import { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DashLayout from 'Components/Layout/dash';

import { Box, Grid, Paper } from '@material-ui/core';

export default function Profile() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: 'primary.dark',
          borderRadius: 5,
        }}
      >
      <Container maxWidth="sm"></Container>
      </Box>
      
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography>
            Profile
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}