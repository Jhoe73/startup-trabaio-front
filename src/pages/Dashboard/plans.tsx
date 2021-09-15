import * as React from 'react';
import { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DashLayout from 'Components/Layout/dash';

export default function Plans() {
  return (
      <Container maxWidth="sm">
        <Typography>
          Plans
        </Typography>
      </Container>
  );
}

Plans.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}