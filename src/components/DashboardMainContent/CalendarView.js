import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import EventIcon from '@mui/icons-material/Event';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const days = [
  { day: 'Mon', date: 25 },
  { day: 'Tue', date: 26 },
  { day: 'Wed', date: 27 },
  { day: 'Thu', date: 28 },
  { day: 'Fri', date: 29 },
  { day: 'Sat', date: 30 },
  { day: 'Sun', date: 31 },
];

const appointments = [
  { day: 'Tue', time: '09:00', type: 'Dentist', icon: <EventIcon sx={{ color: '#fff' }} />, color: '#3d3dff' },
  { day: 'Sat', time: '12:00', type: 'Physiotherapy', icon: <LocalHospitalIcon sx={{ color: '#fff' }} />, color: '#1ec9e7' },
];

const extraAppointments = [
  {
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: <EventIcon sx={{ color: '#fff' }} />,
    color: '#3d3dff',
  },
  {
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: <LocalHospitalIcon sx={{ color: '#fff' }} />,
    color: '#1ec9e7',
  },
];

const CalendarView = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="subtitle2" sx={{ color: '#b0b7c3', fontWeight: 600, mb: 2 }}>
        May 2025      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        {days.map((d) => (
          <Box key={d.day} sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="caption" sx={{ color: '#b0b7c3' }}>{d.day}</Typography>
            <Box
              sx={{
                mt: 1,
                width: 36,
                height: 50,
                mx: 'auto',
                borderRadius: '50%',
                background: appointments.find((a) => a.day === d.day) ? appointments.find((a) => a.day === d.day).color : '#f6f9fc',
                color: appointments.find((a) => a.day === d.day) ? '#fff' : '#222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {d.date}
            </Box>
            {/* Appointment time chip */}
            {appointments.find((a) => a.day === d.day) && (
              <Chip
                label={appointments.find((a) => a.day === d.day).time}
                size="small"
                sx={{ mt: 1, background: appointments.find((a) => a.day === d.day).color, color: '#fff', fontWeight: 600 }}
              />
            )}
          </Box>
        ))}
      </Box>
      {/* Appointment summary cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2}}>
        {extraAppointments.map((appt) => (
          <Box key={appt.type} sx={{ background: appt.color, color: '#fff', borderRadius: 2, p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            {appt.icon}
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>{appt.type}</Typography>
              <Typography variant="caption">{appt.time} <span style={{ color: '#b0b7c3' }}>{appt.doctor}</span></Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default CalendarView;
