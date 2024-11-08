import { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Home as HomeIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SidebarMenu = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log('opa')
    setShowSideBar(open);
  };

  return (
    <Box sx={(theme) => ({ [theme.breakpoints.down('sm')]: { opacity: '1' }, opacity: '0', zIndex: '2' })}>
      <IconButton 
        color="inherit" 
        aria-label="open drawer" 
        onClick={toggleDrawer(true)} 
        sx={{ position: 'fixed', top: '1.5rem', left: 4 }}
      >
        <MenuIcon sx={{ width: 32, height: 32, backgroundColor: 'blue', borderRadius: 1, color: 'white', }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={showSideBar}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 300, backgroundColor: 'blue', height: '100%', color: 'white' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2.5 }}>
            <Typography variant='h5'>BookStats</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: 'white', width: 16, height: 16 }} />
            </IconButton>
          </Box>
          <Divider sx={{ backgroundColor: 'gray' }} />
          <List>
            <ListItem onClick={() => { navigate('/home'); setShowSideBar(false); }}>
              <ListItemIcon>
                <HomeIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: 'white' }} />
            </ListItem>
            <ListItem onClick={() => { navigate('/product/add'); setShowSideBar(false); }}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SidebarMenu;