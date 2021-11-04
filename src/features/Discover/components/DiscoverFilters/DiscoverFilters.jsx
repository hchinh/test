import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import DiscoverSort from './DiscoverSort';
import FilterByCategory from './FilterByCategory';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginBottom: '32px',
  },

  divider: {
    height: '1px',
    backgroundColor: '#353945',
    margin: '42px 0 32px 0',
  },
});

function DiscoverFilters() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FilterByCategory />
      <Box className={classes.divider}></Box>
      <DiscoverSort />
    </Box>
  );
}

export default DiscoverFilters;
