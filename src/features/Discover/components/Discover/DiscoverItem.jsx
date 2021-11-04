import React from 'react';
import { Box } from '@mui/system';
import { formatPrice } from 'utils';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    cursor: 'pointer',
    transition: 'transform ease 0.2s',

    '&:hover': {
      transform: 'scale(1.03)',
    },
  },

  thumbnail: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '16px',
  },

  desc: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0 4px 0',

    '& > span': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
    },

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '68px',
      height: '26px',
      border: '2px solid #45B26B',
      borderRadius: '4px',
      padding: '6px',
    },

    '& > div > span': {
      fontFamily: 'Poppins',
      color: '#45B26B',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '12px',
    },
  },

  price: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '13px',
    lineHeight: '20px',
  },
});

function DiscoverItem({ name, price, year }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <img className={classes.thumbnail} src="/assets/thumbnail.png" alt="vehicle" />
      </Box>
      <Box className={classes.desc}>
        <span>{name}</span>
        <div>
          <span>{year}</span>
        </div>
      </Box>
      <Box>
        <span className={classes.price}>{formatPrice(price)}</span>
      </Box>
    </Box>
  );
}

export default DiscoverItem;
