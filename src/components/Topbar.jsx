import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import RoundedButton from './RoundedButton';

const useStyles = makeStyles({
  root: {
    position: 'static',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 160px',
    borderBottom: '1px solid #353945',
  },

  left: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  right: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  logo: {
    position: 'absolute',
    left: '93px',
    objectFit: 'cover',
    objectPosition: 'center',
    cursor: 'pointer',
  },

  brand: {
    margin: '4px 32px 4px 40px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.02em',
    color: '#F4F5F6',
    cursor: 'pointer',
  },

  divider: {
    backgroundColor: '#353945',
    width: '2px',
    height: '40px',
    borderRadius: '2px',
  },

  menu: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',

    '& > li': {
      marginLeft: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '16px',
      color: '#777E91',
      cursor: 'pointer',
    },
  },

  icon: {
    position: 'relative',
    color: '#777E90',
    margin: '0 35px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '& > span': {
      position: 'absolute',
      top: '-5px',
      left: '18px',
      width: '10px',
      height: '10px',
      backgroundColor: '#45B26B',
      borderRadius: '50%',
    },
  },

  search_box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 12px 10px 16px',
    border: '2px solid #353945',
    borderRadius: '8px',

    '& > input': {
      fontFamily: 'Poppins',
      fontSize: '12px',
      color: '#777E90',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      fontWeight: 400,
      lineHeight: '20px',
    },

    '& > svg': {
      color: '#777E90',
      cursor: 'pointer',
    },
  },
});

function Topbar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <img className={classes.logo} src="assets/logo.png" alt="logo" />
        <span className={classes.brand}>crypter</span>
        <span className={classes.divider}></span>
        <ul className={classes.menu}>
          <li>Discover</li>
          <li>How it work</li>
        </ul>
      </Box>
      <Box className={classes.right}>
        <Box className={classes.search_box}>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </Box>
        <Box className={classes.icon}>
          <NotificationsNoneIcon />
          <span></span>
        </Box>
        <Box style={{ marginRight: '12px' }}>
          <RoundedButton label="Upload" primary={true} />
        </Box>
        <RoundedButton label="Connect Wallet" />
      </Box>
    </Box>
  );
}

export default Topbar;
