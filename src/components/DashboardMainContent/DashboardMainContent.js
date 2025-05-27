import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => (
  <Box sx={{ width: '100%' }}>
    {/* Top Row - Three columns */}
    <Grid container spacing={3} sx={{ mb: 2 }}>
      <Grid item xs={12} md={4}>
        <AnatomySection /> 
      </Grid>
      <Grid item xs={12} md={3}>
        <HealthStatusCards />
      </Grid>
      <Grid item xs={12} md={5}>
        <CalendarView />
      </Grid>
    </Grid>

    {/* Bottom Row - Two columns */}
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <ActivityFeed />
      </Grid>
      <Grid item xs={12} md={5}>
        <UpcomingSchedule />
      </Grid>
    </Grid>
  </Box>
);

export default DashboardMainContent;