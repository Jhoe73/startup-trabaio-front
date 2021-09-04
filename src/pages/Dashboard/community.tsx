import * as React from 'react';
import { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DashLayout from 'Components/Layout/dash';

export default function Community() {
  return (
    <Container maxWidth="sm">
      <Typography>
        Profile
      </Typography>
    </Container>
  );
}

Community.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}