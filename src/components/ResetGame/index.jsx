import React from 'react';
import PropTypes from 'prop-types';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { RESET } = applicationConstants;

const ResetGame = ({ onReset }) => {
  return (
    <button data-testid={RESET} className='reset' onClick={onReset}>
      {RESET}
    </button>
  );
};

ResetGame.propTypes = {
  onReset: PropTypes.func.isRequired
};

export default ResetGame;
