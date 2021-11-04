import { makeStyles } from '@mui/styles';
import RoundedButton from 'components/RoundedButton';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  title: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    margin: '128px 0 24px 0',

    '& > p': {
      color: '#777E90',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      fontSize: '12px',
      textTransform: 'uppercase',
      lineHeight: '12px',
    },

    '& > h1': {
      fontWeight: 'bold',
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-0.01em',
      marginTop: '8px',
    },
  },
});

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <p>Create, Explore & Collect digital art nfts</p>
        <h1>The new creative economy.</h1>
      </div>
      <RoundedButton label="Start Your Search" />
    </div>
  );
}

export default Banner;
