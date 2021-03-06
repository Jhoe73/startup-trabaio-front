import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../../Components/Link';

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