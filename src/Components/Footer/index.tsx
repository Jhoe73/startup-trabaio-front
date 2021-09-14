import Copyright from '../Copyright';
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@material-ui/core';

export function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#006D77"
        color="white"
      >
        <Container maxWidth="xl">
        <Grid container direction="row-reverse" justifyContent="space-around" alignItems="flex-start">
            <Grid item >
              <Typography variant="h5" mb={2}>Help</Typography >
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h5" mb={2}>Help</Typography >
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h5" mb={2}>Help</Typography >
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
            <Grid item xs={12}>
              <Box borderBottom={1}></Box>
            </Grid>
            <Grid item >
              <Link href="/" color="inherit">Home</Link>
            </Grid>
            <Grid item >
              <Link href="/" color="inherit">Espaços</Link>
            </Grid>
            <Grid item >
              <Link href="/" color="inherit">Planos</Link>
            </Grid>
            <Grid item >
              <Link href="/" color="inherit">Sobre</Link>
            </Grid>
            <Grid item >
              <Link href="/" color="inherit">Outro</Link>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </footer>
  )
}