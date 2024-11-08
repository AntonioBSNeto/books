import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { NavbarItem } from "./NavBarItem";
import SidebarMenu from "./SidebarMenu";
import { AppBar, Box, Container, List, ListItem, Toolbar, Typography } from "@mui/material";

export const Header = () => {

  const location = useLocation(); 
  const currentPath = location.pathname; // Usando useLocation para obter a rota atual

  const navigate = useNavigate()

  // menu lateral exibido em telas menores
  const sidebarMenu = () => {
    return (
      <SidebarMenu />
    )
  }

  const defaultHeader = () => (
    <AppBar position="static" color="default" sx={{ backgroundColor: 'white'}}>
      <Container maxWidth="lg" sx={{ margin: '1.25rem 0' }}>
        <Toolbar disableGutters sx={{ justifyContent: { xs: 'center', sm: 'space-between' }, px: 2 }}>
          <Typography variant="h5" onClick={() => navigate('/home')}>BookStats</Typography>
          <Box component="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <List sx={{ display: 'flex', p: 0 }}>
              <ListItem disablePadding>
                <NavbarItem isSelected={currentPath === '/'} href={'/'}>
                  Home
                </NavbarItem>
              </ListItem>
              <ListItem disablePadding>
                <NavbarItem isSelected={currentPath === '/dashboard'} href={'/dashboard'}>
                  Dashboard
                </NavbarItem>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Placeholder for additional elements */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {sidebarMenu()}
      {defaultHeader()}
      {/* O outlet é usado para que o header que é comum a todas as telas seja carregado apenas uma vez */}
      <Outlet />
    </Box>
  );
};

