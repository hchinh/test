import { makeStyles } from '@mui/styles';
import React from 'react';
import DiscoverFilters from '../DiscoverFilters/DiscoverFilters';
import DiscoverList from './DiscoverList';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '128px 160px',
  },

  title: {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.01em',
    marginBottom: '80px',
  },
});

function Discover({ vehicleList = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Discover</h1>
      <DiscoverFilters />
      <DiscoverList vehicleList={vehicleList} />
    </div>
  );
}

export default Discover;
