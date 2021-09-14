import * as React from 'react';
import { ReactElement } from 'react';
import {Container, Typography, Box, Button} from '@material-ui/core';
import Link from 'Common/Link';
import DashLayout from 'Components/Layout/dash';

export default function Places() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <h1>
          TESTEEEEE
        </h1>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}

Places.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}