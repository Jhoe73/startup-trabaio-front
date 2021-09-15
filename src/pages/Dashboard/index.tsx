import * as React from 'react';
import { ReactElement } from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import Deposits from "Dash-components/Deposits";
import Orders from 'Dash-components/Orders';
import Copyright from 'Common/Copyright';
import DashLayout from 'Components/Layout/dash';

export default function DashboardContent() {
  return (
      <React.Fragment> 
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>

            
            {/* Chart */}
            <Grid item xs={12} md={12} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
              </Paper>
            </Grid>

              {/* Recent Deposits */}
              <Grid item xs={12} md={12} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 800,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={8}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>

            
          
            
            </Grid>
          
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </React.Fragment> 
  );
}

DashboardContent.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}
