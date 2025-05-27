import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const activityData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 60 },
  { day: 'Wed', value: 80 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 30 },
  { day: 'Sun', value: 50 },
];

const ActivityFeed = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="subtitle2" sx={{ color: '#3d3dff', fontWeight: 700, mb: 2 }}>
        Activity
      </Typography>
      <Typography variant="caption" sx={{ color: '#7b8190', mb: 9, display: 'block' }}>
        3 appointments on this week
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'end', gap: 3, height: 150, mt: 2 }}>
        {activityData.map((item) => (
          <Box key={item.day} sx={{ textAlign: 'center', flex: 1 }}>
            <Box sx={{
              width: 16,
              height:170,
              background: item.day === 'Wed' ? '#3d3dff' : '#1ec9e7',
              borderRadius: 2,
              mx: 'auto',
              mb: 0.5,
              transition: 'height 0.3s',
            }} />
            <Typography variant="caption" sx={{ color: '#b0b7c3' }}>{item.day}</Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default ActivityFeed;