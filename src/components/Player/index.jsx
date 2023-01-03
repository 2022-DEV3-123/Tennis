import React from 'react';
import PropTypes from 'prop-types';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { PLAYER_TITLE, SCORED } = applicationConstants;

const Player = ({ name, onScored, gameOver }) => {
  return (
    <div>
      <h4 data-testid={`${PLAYER_TITLE} ${name}`}>{name}</h4>
      <button
        className={gameOver ? 'disabled' : ''}
        disabled={gameOver}
        data-testid={name}
        onClick={() => onScored(name)}
      >
        {SCORED}
      </button>
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  onScored: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired
};

export default Player;
