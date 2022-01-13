import {useState} from 'react';
import Navigation from '../Navigation'
import {NavLink} from 'react-router-dom';

import { BsTrophyFill } from "react-icons/bs";


import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,MenuItem} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';


export default function Header () {
  const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: 'orange',
    },
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography 
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                <NavLink to="/" exact style={styles.link}>
                    <BsTrophyFill />
                      ВОЛЬНИК
                </NavLink>
              </Typography>
              
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                </IconButton>
                  <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                    <MenuItem onClick={handleCloseNavMenu}>

                      <Typography textAlign="center">
                          <NavLink to="/" exact style={styles.link}>Главная</NavLink>
                      </Typography>
                        
                      <Typography textAlign="center">
                          <NavLink to="/training" exact style={styles.link}>Тренировки</NavLink>
                      </Typography>
                        
                      <Typography textAlign="center">
                          <NavLink to="/photo" exact style={styles.link}>Фото</NavLink>
                      </Typography>
                      
                      <Typography textAlign="center">
                          <NavLink to="/about" exact style={styles.link}>О нас</NavLink>
                      </Typography>
                      
                      <Typography textAlign="center">
                          <NavLink to="/contacts" exact style={styles.link}>Контакты</NavLink>
                      </Typography>
                    </MenuItem>
                  </Menu>
              </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
            >
              <NavLink to="/" exact style={styles.link}>
                <BsTrophyFill />
                  ВОЛЬНИК
              </NavLink>
            </Typography>
            
              <Navigation/>
  
            </Toolbar>
          </Container>
        </AppBar>
  );
};

// export default function AppBar () {
    // const styles = {
    //     header: {
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       borderBottom: '1px solid #303C6C',
    //     },
    //     link: {
    //       display: 'inline-block',
    //       textDecoration: 'none',
    //       padding: 12,
    //       fontWeight: 700,
    //       color: '#303C6C',
    //     },
    //     activeLink: {
    //       color: '#F4976C',
    //     },
    //   };

//     return (
//         <header style={styles.header}>
          
//           <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
//           <BsTrophyFill />
//             ВОЛЬНИК
//           </NavLink>

//           <Navigation />

//         </header>
//     )
// }