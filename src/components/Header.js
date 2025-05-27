import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';

const Header = () => (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      top: 20,
      zIndex: 1201,
      background: '#fff',
      borderRadius: '15px 15px 15px 15px',
      boxShadow: '0 4px 24px 0 rgba(44, 101, 144, 0.08)',
      color: '#222',
      px: { xs: 2, md: 5 },
      py: 1,
      mb: 3,
    }}
  >
    <Toolbar disableGutters sx={{ minHeight: 80, display: 'flex', justifyContent: 'space-between' }}>
      {/* Logo/Title */}
      {/* <Typography variant="h5" sx={{ fontWeight: 700, mr: 4 }}>
        <span style={{ color: '#1ec9e7' }}>Health</span>care<span style={{ color: '#3d3dff' }}>.</span>
      </Typography> */}

      {/* Search Bar */}
      <Box sx={{
        background: '#f6f9fc',
        borderRadius: 2,
        px: 2,
        py: 0.5,
        display: 'flex',
        alignItems: 'center',
        width: 340,
        mr: 3,
      }}>
        <InputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ width: '100%', fontSize: 16, color: '#222' }}
          disabled
        />
      </Box>
      {/* Notification, Profile, Add Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton sx={{ color: '#3d3dff' }}>
          <Badge color="error" variant="dot" overlap="circular">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <Avatar
          alt="Dr. Raj"
          src="https://via.placeholder.com/40"
          sx={{ width: 40, height: 40, border: '2px solid #e6e9f0', mr: 1 }}
        />
        <Typography sx={{ fontWeight: 600, color: '#3d3dff', mr: 1 }}>Dr. Raj</Typography>
        <IconButton sx={{ background: '#3d3dff', color: '#fff', borderRadius: 2, width: 36, height: 36, '&:hover': { background: '#1ec9e7' } }}>
          <AddIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
