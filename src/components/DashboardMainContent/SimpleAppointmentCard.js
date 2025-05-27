import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <Paper elevation={2} sx={{ borderRadius: 2, p: 2, display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
    <Box sx={{ fontSize: 24 }}>{icon}</Box>
    <Box>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>{title}</Typography>
      <Typography variant="caption" sx={{ color: '#7b8190' }}>{time}</Typography>
    </Box>
  </Paper>
);

export default SimpleAppointmentCard;
