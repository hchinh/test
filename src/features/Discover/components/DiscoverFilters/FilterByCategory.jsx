import { HighlightOffOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
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
  },
});

function FilterByCategory() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Dropdown label="Recently added" />
      </div>
      <ul className={classes.menu}>
        <li>All items</li>
        <li>Art</li>
        <li>Game</li>
        <li>Photography</li>
        <li>Music</li>
        <li>Video</li>
      </ul>
      <div className={classes.right}>
        <RoundedButton label="Filter" primary={true} icon={<HighlightOffOutlined />} />
      </div>
    </div>
  );
}

export default FilterByCategory;
