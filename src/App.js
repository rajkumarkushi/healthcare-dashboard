import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import Box from '@mui/material/Box';

const App = () => (
  <Box sx={{ display: 'flex', minHeight: '100vh', background: '#f6f9fc', overflowX: 'hidden' }}>
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Sidebar />
    </Box>

    <Box
      sx={{
        flex: 1,
        ml: { xs: 10, md: '260px' },
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        marginLeft: { xs: 0, md: 4 },
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          width: '100%',
          maxWidth: 1400,
          px: { xs: 1, md: 4 },
          py: { xs: 1, md: 3 },
        }}
      >
        <DashboardMainContent />
      </Box>
    </Box>
  </Box>
);

export default App;
