import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

RoundedButton.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

const useStyles = makeStyles({
  root: {
    padding: '10px 16px',
    borderRadius: '90px',
    cursor: 'pointer',
    border: '2px solid #777E90',
  },

  active: {
    padding: '12px 16px',
    cursor: 'pointer',
    borderRadius: '90px',
    backgroundColor: '#3772FF',
    border: 'none',
  },
});

function RoundedButton({ label, primary }) {
  const classes = useStyles();

  return <span className={primary ? classes.active : classes.root}>{label}</span>;
}

export default RoundedButton;