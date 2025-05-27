import React from 'react';
import Grid from '@mui/material/Grid';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={7}>
      <AnatomySection />
    </Grid>
    <Grid item xs={12} md={5}>
      <HealthStatusCards />
    </Grid>
  </Grid>
);

export default DashboardOverview;
