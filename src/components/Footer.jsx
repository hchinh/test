import { ArrowRightAlt } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    borderTop: '1px solid #353945',
    padding: '80px 160px 32px 160px',
  },

  divider: {
    height: '1px',
    backgroundColor: '#353945',
    margin: '32px 0',
  },

  info: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },

  policy: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },

  name: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },

  brand: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',

    '& > img': {
      position: 'absolute',
      left: '93px',
      objectFit: 'cover',
      objectPosition: 'center',
      cursor: 'pointer',
    },

    '& > span': {
      margin: '4px 32px 4px 40px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.02em',
      color: '#F4F5F6',
      cursor: 'pointer',
    },
  },

  title: {
    marginTop: '32px',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.01em',
    color: '#E6E8EC',
  },

  extra: {
    display: 'flex',
    flexFlow: 'column nowrap',

    '& > h4': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
    },

    '& > ul': {
      marginTop: '40px',
    },

    '& > ul > li': {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      color: '#777E90',
      cursor: 'pointer',
    },

    '& > ul > li:not(:last-child)': {
      marginBottom: '24px',
    },

    '& > p': {
      marginTop: '40px',
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      color: '#E6E8EC',
    },
  },

  copyright: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    color: '#777E90',
  },

  cookies: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    color: '#E6E8EC',

    '& > span': {
      fontWeight: 600,
      color: '#3772FF',
      cursor: 'pointer',
    },
  },

  email: {
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 10px 12px 14px',
    border: '2px solid #353945',
    borderRadius: '90px',
    color: '#777E90',

    '& > input': {
      fontFamily: 'Poppins',
      fontSize: '14px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      fontWeight: 400,
      lineHeight: '24px',
      color: '#777E90',
    },
  },

  btn: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3772FF',
    borderRadius: '50%',
    cursor: 'pointer',
    color: ' #FCFCFD',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <Box className={classes.name}>
          <Box className={classes.brand}>
            <img className={classes.logo} src="assets/logo.png" alt="logo" />
            <span className={classes.brand}>crypter</span>
          </Box>
          <Box className={classes.title}>
            <span>
              The New Creative
              <br /> Economy.
            </span>
          </Box>
        </Box>
        <Box className={classes.extra}>
          <h4>Stacks</h4>
          <ul>
            <li>Discover</li>
            <li>Connect wallet</li>
            <li>Create item</li>
          </ul>
        </Box>
        <Box className={classes.extra}>
          <h4>Info</h4>
          <ul>
            <li>Download</li>
            <li>Demos</li>
            <li>Support</li>
          </ul>
        </Box>
        <Box className={classes.extra}>
          <h4>Join Newsletter</h4>
          <p>
            Subscribe our newsletter to get more free design
            <br />
            course and resource.
          </p>
          <Box className={classes.email}>
            <input type="text" placeholder="Enter your email" />
            <Box className={classes.btn}>
              <ArrowRightAlt />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.divider}></Box>
      <Box className={classes.policy}>
        <Box className={classes.copyright}>Copyright &copy; 2021 UI8 LLC. All rights reserved</Box>
        <Box className={classes.cookies}>
          We use cookies for better service. <span>Accept</span>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
