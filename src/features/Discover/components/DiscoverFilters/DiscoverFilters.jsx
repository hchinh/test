import { makeStyles } from '@mui/styles';
import React from 'react';
import DiscoverSort from './DiscoverSort';
import FilterByCategory from './FilterByCategory';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },

  divider: {
    height: '1px',
    backgroundColor: '#353945',
    margin: '32px 0',
  },
});

function DiscoverFilters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FilterByCategory />
      <div className={classes.divider}></div>
      <DiscoverSort />
    </div>
  );
}

export default DiscoverFilters;
