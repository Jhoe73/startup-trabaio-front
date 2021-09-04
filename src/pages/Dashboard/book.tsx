import * as React from 'react';
import { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DashLayout from 'Components/Layout/dash';
export default function Book() {
  return (
    <Container maxWidth="sm">
      <Typography>
          Teste
      </Typography>
    </Container>
  );
}

Book.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}