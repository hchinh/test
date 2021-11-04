import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 8px 6px 16px',
    border: '2px solid #353945',
    borderRadius: '12px',
    width: '180px',
  },

  label: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
  },

  arrow: {
    position: 'relative',
    width: '32px',
    height: '32px',
    border: '2px solid #353945',
    borderRadius: '50%',
    cursor: 'pointer',

    '& > img': {
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: 'center',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
});

function Dropdown({ label }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.label}>{label}</p>
      <div className={classes.arrow}>
        <img src="/assets/arrow.png" alt="shape" />
      </div>
    </div>
  );
}

export default Dropdown;
