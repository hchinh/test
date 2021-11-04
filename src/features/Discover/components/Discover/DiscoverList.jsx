import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import RoundedButton from 'components/RoundedButton';
import React, { useState } from 'react';
import DiscoverItem from './DiscoverItem';

const useStyles = makeStyles({
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '52px',
  },

  button: {
    width: '140px',
  },
});

function DiscoverList({ vehicleList = [] }) {
  const classes = useStyles();
  const [limit, setLimit] = useState(8);

  const handleLoadMoreClick = () => {
    setLimit(limit + 4);
  };

  return (
    <>
      <Grid container spacing={4}>
        {vehicleList.slice(0, limit).map((vehicle) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={vehicle.id}>
            <DiscoverItem name={vehicle.name} price={vehicle.price} year={vehicle.year} />
          </Grid>
        ))}
      </Grid>

      <Box className={classes.loading}>
        <Box className={classes.button} onClick={handleLoadMoreClick}>
          <RoundedButton label="Load more" icon={<img src="/assets/loading.png" alt="loading" />} />
        </Box>
      </Box>
    </>
  );
}

export default DiscoverList;
