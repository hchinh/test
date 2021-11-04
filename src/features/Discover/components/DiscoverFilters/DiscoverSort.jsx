import { Grid, Slider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Dropdown from 'components/Dropdown';
import React from 'react';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '12px',
    color: '#B1B5C4',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
});

const CustomSlider = styled(Slider)({
  color: '#3772FF',
  height: 12,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#3772FF',
    border: '4px solid #FCFCFD',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    color: '#FCFCFD',
    fontFamily: 'Poppins',
    lineHeight: '20px',
    fontSize: '12px',
    fontWeight: 600,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#3772FF',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-markLabel': {
    left: '90.5% !important',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#FCFCFD',
  },

  '& .MuiSlider-mark': {
    display: 'none',
  },

  '& .MuiSlider-markLabelActive': {
    left: '7% !important',
  },
});

const marks = [
  {
    value: 0,
    label: '0 ETH',
  },

  {
    value: 100,
    label: '100 ETH',
  },
];

function DiscoverSort() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <p className={classes.title}>Price</p>
        <Dropdown label="Highest price" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <p className={classes.title}>Likes</p>
        <Dropdown label="Most liked" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <p className={classes.title}>Creator</p>
        <Dropdown label="Verified only" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <p className={classes.title}>Price Range</p>
        <CustomSlider valueLabelDisplay="on" defaultValue={50} marks={marks} />
      </Grid>
    </Grid>
  );
}

export default DiscoverSort;
