import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL, LOVE, ONE, FIFTEEN_LOVE, TWICE, THIRTY_LOVE } =
  applicationConstants;

const ScoreBoard = ({ playerOneScore }) => {
  const [gameScore, setGameScore] = useState();

  useEffect(() => {
    if (playerOneScore === LOVE) {
      setGameScore(LOVE_ALL);
    } else if (playerOneScore === ONE) {
      setGameScore(FIFTEEN_LOVE);
    } else if (playerOneScore === TWICE) {
      setGameScore(THIRTY_LOVE);
    }
  }, [playerOneScore]);

  return (
    <div>
      <h4 className='score-title' data-testid={SCORE_TITLE}>
        {SCORE_TITLE}
      </h4>
      <p className='game-score' data-testid={GAME_SCORE}>
        {gameScore}
      </p>
    </div>
  );
};

ScoreBoard.propTypes = {
  playerOneScore: PropTypes.number.isRequired
};

export default ScoreBoard;
