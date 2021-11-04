import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    padding: '10px 16px',
    borderRadius: '90px',
    cursor: 'pointer',
    border: '2px solid #777E90',
  },

  active: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    padding: '12px 16px',
    cursor: 'pointer',
    borderRadius: '90px',
    backgroundColor: '#3772FF',
    border: 'none',
  },

  icon: {
    marginLeft: '5px',
    display: 'flex',
    alignItems: 'center',
  },
});

function RoundedButton({ label, primary, icon }) {
  const classes = useStyles();

  return (
    <Box className={primary ? classes.active : classes.root}>
      <Box>{label}</Box>
      {icon && <Box className={classes.icon}>{icon}</Box>}
    </Box>
  );
}

export default RoundedButton;
