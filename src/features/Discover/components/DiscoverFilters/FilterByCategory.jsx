import { HighlightOffOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Dropdown from 'components/Dropdown';
import RoundedButton from 'components/RoundedButton';
import React from 'react';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    position: 'absolute',
    left: 0,
    width: '180px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  right: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  menu: {
    display: 'flex',
    flexFlow: 'row nowrap',
    transition: 'transform ease 0.3s',

    '& > li': {
      color: '#777E90',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      cursor: 'pointer',
      padding: '6px 12px',
    },

    '& > li:not(:last-child)': {
      marginRight: '12px',
    },

    '& > li:first-child': {
      backgroundColor: '#353945',
      color: '#FCFCFD',
      borderRadius: '100px',
    },
    '& > li:not(:first-child):hover': {
      color: '#fcfcfd',
      transform: 'scale(1.03)',
    },
  },
});

function FilterByCategory() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Dropdown label="Recently added" />
      </Box>
      <ul className={classes.menu}>
        <li>All items</li>
        <li>Art</li>
        <li>Game</li>
        <li>Photography</li>
        <li>Music</li>
        <li>Video</li>
      </ul>
      <Box className={classes.right}>
        <RoundedButton label="Filter" primary={true} icon={<HighlightOffOutlined />} />
      </Box>
    </Box>
  );
}

export default FilterByCategory;
