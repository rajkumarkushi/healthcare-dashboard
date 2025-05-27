import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScienceIcon from '@mui/icons-material/Science';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 260;

const navItemsGeneral = [
  { text: 'Dashboard', icon: <HomeIcon sx={{ color: '#3d3dff' }} /> },
  { text: 'History', icon: <HistoryIcon sx={{ color: '#b0b7c3' }} /> },
  { text: 'Calendar', icon: <CalendarMonthIcon sx={{ color: '#b0b7c3' }} /> },
  { text: 'Appointments', icon: <EventNoteIcon sx={{ color: '#b0b7c3' }} /> },
  { text: 'Statistics', icon: <BarChartIcon sx={{ color: '#b0b7c3' }} /> },
  { text: 'Tests', icon: <ScienceIcon sx={{ color: '#b0b7c3' }} /> },
];
const navItemsTools = [
  { text: 'Chat', icon: <ChatIcon sx={{ color: '#b0b7c3' }} /> },
  { text: 'Support', icon: <SupportAgentIcon sx={{ color: '#b0b7c3' }} /> },
];

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
        background: '#fff',
        borderRadius: '24px',
        margin: '24px 0 24px 24px',
        boxShadow: '0 4px 24px 0 rgba(44, 101, 144, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 0 24px 0',
      },
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: 700, marginLeft: 4, marginBottom: 4 }}>
      <span style={{ color: '#1ec9e7' }}>Health</span>care<span style={{ color: '#3d3dff' }}>.</span>
    </Typography>
    <Typography variant="subtitle2" sx={{ color: '#b0b7c3', fontWeight: 600, marginLeft: 4, marginBottom: 1 }}>
      General
    </Typography>
    <List>
      {navItemsGeneral.map((item, idx) => (
        <ListItem button key={item.text} sx={{ borderRadius: 2, mb: 0.5, color: idx === 0 ? '#3d3dff' : '#7b8190', background: idx === 0 ? '#f6f9fc' : 'none' }}>
          <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
    <Typography variant="subtitle2" sx={{ color: '#b0b7c3', fontWeight: 600, marginLeft: 4, marginTop: 3, marginBottom: 1 }}>
      Tools
    </Typography>
    <List>
      {navItemsTools.map((item) => (
        <ListItem button key={item.text} sx={{ borderRadius: 2, mb: 0.5, color: '#7b8190' }}>
          <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
    <Divider sx={{ my: 2 }} />
    <List sx={{ mt: 'auto' }}>
      <ListItem button sx={{ borderRadius: 2, color: '#7b8190' }}>
        <ListItemIcon sx={{ minWidth: 36 }}><SettingsIcon sx={{ color: '#b0b7c3' }} /></ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
