import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
// import '../../styles/UpcomingSchedule.css';

const upcomingAppointments = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: <EventAvailableIcon sx={{ color: '#3d3dff' }} /> },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: <VisibilityIcon sx={{ color: '#1ec9e7' }} /> },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Cardiologist', time: '11:00 AM', icon: <FavoriteIcon sx={{ color: '#ff4d6d' }} /> },
      { title: 'Neurologist', time: '16:00 PM', icon: <PsychologyIcon sx={{ color: '#ffb300' }} /> },
    ],
  },
];

const UpcomingSchedule = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="subtitle2" sx={{ color: '#3d3dff', fontWeight: 700, mb: 1 }}>
        The Upcoming Schedule
      </Typography>
      {upcomingAppointments.map((entry, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#7b8190', mb: 1 }}>{entry.day}</Typography>
          {entry.appointments.map((appt, index) => (
            <SimpleAppointmentCard
              key={index}
              title={appt.title}
              time={appt.time}
              icon={appt.icon}
            />
          ))}
        </Box>
      ))}
    </CardContent>
  </Card>
);

export default UpcomingSchedule;
