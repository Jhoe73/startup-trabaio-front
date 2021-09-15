import * as React from 'react';
import { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import DashLayout from 'Components/Layout/dash';
import {Grid } from '@material-ui/core';
import CardLocal from 'Components/Dashboard/CardLocal';

const message = `Coworking`;
const number = 2;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Places() {

  return (
    <React.Fragment> 
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container item justifyContent="flex-start" spacing={3}>
            {cards.map((card) => (
              <Grid key={card} container justifyContent="center" item xs={12} xl={6}>
                <CardLocal key={number} msg={message}/>
              </Grid>
            ))}
          </Grid>
      </Container>
    </React.Fragment> 
  );
}

Places.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}