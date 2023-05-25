import * as React from 'react';
import {useEffect} from 'react';
import { useState } from 'react';
import SearchFunction from "./SearchFunction";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../app.css';
// import AuthService from '../utils/Auth'
import decode from 'jwt-decode'
// const user = AuthService.getProfile().data

const pages = [
  {
    id: 1,
    page: 'Home',
    path: '/home'
  },
  {
    id: 2,
    page: 'My Collection',
    path: '/mycollection'
  },
  {
    id: 3,
    page: 'Friends',
    path: '/friends'
  }
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false); // State variable for signed-in status

  const isMenuOpen = Boolean(anchorEl);
  const isNotificationMenuOpen = Boolean(notifAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAlertMenuOpen = (event) => {
    console.log('target', event.currentTarget.value);
    setNotifAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
//   const token = AuthService.getToken()
//   const tokenRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/;
// const isValidToken = tokenRegex.test(token);
// console.log(isValidToken)
  const handleSignOut = () => {
    try {
      // AuthService.logout();
      setIsSignedIn(false);
      handleMenuClose();
    } catch (error) {
      console.error('Error while signing out:', error);
      // Handle error, display a message, or perform other actions as needed
    }
  };
  // window.location.href = '/';
  // useEffect(() => {
  //   // Check if the user is signed in on component mount
  //   checkIfSignedIn();
  // }, []);

  // const checkIfSignedIn = () => {
  //   try {
  //     // const token = AuthService.getToken();
  //     // const signedIn = token && !AuthService.isTokenExpired(token);
  //     setIsSignedIn(signedIn);
  //   } catch (error) {
  //     console.error('Error while checking if signed in:', error);
  //     setIsSignedIn(false); // Set signed-in state to false in case of error
  //   }
  // };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/profile' style={{ color: 'black', textDecoration: 'none' }}>
        {isSignedIn ? (
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        ) : null}
      </Link>
      <Link to='/myaccount' style={{ color: 'black', textDecoration: 'none' }}>
        {isSignedIn ? (
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        ) : null}
      </Link>
      <Link to ='/' style={{ color: 'black', textDecoration: 'none' }}>
      {!isSignedIn ? (
        <MenuItem onClick={handleSignOut}>Sign in</MenuItem>
      ) : (
        
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      )}
      </Link>
      <Link to='/signup' style={{ color: 'black', textDecoration: 'none' }}>
        {!isSignedIn ? (
          <MenuItem onClick={handleMenuClose}>Sign up</MenuItem>
        ) : null}
      </Link>
    </Menu>
  );
 
  // NOTIFICATIONS MENU

  const notificationMenuId = 'primary-search-account-notification-menu';
  const renderNotificationsMenu = (
    <Menu
      anchorEl={notifAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={notificationMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isNotificationMenuOpen}
      onClose={handleNotifClose}
    >
        <Link to = '/profile' style= {{color: 'black', textDecoration:'none'}}>
      <MenuItem onClick={handleNotifClose}>NOTIFICATIONS</MenuItem>
      </Link>
      
    </Menu>
  );
 

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon className='mailIcon'/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 20 new notifications"
          color="inherit"
        >
          <Badge badgeContent={20} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#4b88a2ff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
           > 
            Needle / Junkeez
          </Typography>

          {/* start of link to pages code */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.path}
                key={page.id}
                // onClick={handleCloseNavMenu}
                style={{ color: 'white', display: 'block', textDecoration: 'none', margin: '25px', flexbox: 'flex', justifyContent: 'space-evenly' }}
              >
                {page.page}
              </Link>
            ))}
          </Box>
          {/* end of added buttons code */}
          <SearchFunction />
          {/* <SearchDiscogsAlbum /> */}
          {/* <SearchSpotAlbum /> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={456} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}

            {/*  NOTIFICATION ICON*/}

            <IconButton
              size="large"
              aria-label="show 20 new notifications"
              color="inherit"
              value={'alert'}
              onClick={handleAlertMenuOpen}
            >
              <Badge badgeContent={69} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/*  PROFILE ICON*/}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              value='profile'
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderNotificationsMenu}
      
    </Box>
  );
}