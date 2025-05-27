// src/components/DashboardMainContent/HealthStatusCards.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SpaIcon from '@mui/icons-material/Spa';

const healthCards = [
  {
    title: 'Lungs',
    icon: <SpaIcon sx={{ color: '#ff4d6d', mr: 1 }} />,
    date: '26 May 2025',
    status: 'Healthy',
    value: 90,
    color: 'success',
  },
  {
    title: 'Teeth',
    icon: <EmojiEventsIcon sx={{ color: '#1ec9e7', mr: 1 }} />,
    date: '26 may 2025',
    status: 'Good',
    value: 70,
    color: 'info',
  },
  {
    title: 'Bone',
    icon: <FavoriteIcon sx={{ color: '#ffb300', mr: 1 }} />,
    date: '26 may 2025',
    status: 'Attention',
    value: 40,
    color: 'warning',
  },
];

const HealthStatusCards = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    {healthCards.map((card) => (
      <Card key={card.title} sx={{ borderRadius: 3, boxShadow: 2 ,height:'23vh'}}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {card.icon}
            <Typography variant="subtitle1" sx={{ fontWeight: 700, flex: 1 }}>{card.title}</Typography>
            <Typography variant="caption" sx={{ color: '#b0b7c3' }}>{card.date}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" sx={{ color: card.color === 'warning' ? '#ffb300' : card.color === 'success' ? '#1ec9e7' : '#3d3dff', fontWeight: 600, mr: 1 }}>{card.status}</Typography>
            <LinearProgress variant="determinate" value={card.value} color={card.color} sx={{ flex: 1, height: 8, borderRadius: 5, background: '#f6f9fc' }} />
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default HealthStatusCards;
