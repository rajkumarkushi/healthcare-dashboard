import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const AnatomySection = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3, minHeight: 400, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
    <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
      <Box sx={{ position: 'relative', width: 220, height: 340, mb: 2 }}>
        <img
          src="/assets/anatomy.jpg"//image of anatomy
          alt="Anatomy"
          style={{ width: '90%', height: '70vh', borderRadius: 12 }}
        />
        {/* Overlay health indicators */}
        <Chip
          icon={<FavoriteIcon sx={{ color: '#ff4d6d' }} />}
          label="Healthy Heart"
          sx={{ position: 'absolute', top: 40, right: -10, background: '#fff', color: '#ff4d6d', fontWeight: 600, boxShadow: 1 }}
        />
        <Chip
          icon={<EmojiPeopleIcon sx={{ color: '#1ec9e7' }} />}
          label="Healthy Leg"
          sx={{ position: 'absolute', bottom: 20, left: -10, background: '#fff', color: '#1ec9e7', fontWeight: 600, boxShadow: 1 }}
        />
      </Box>
    </CardContent>
  </Card>
);

export default AnatomySection;
