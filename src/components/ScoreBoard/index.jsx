import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { applicationConstants, scoreLookUp } from '../../constants/applicationConstants';
import './index.css';

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL, LOVE, THRICE, HYPHEN } = applicationConstants;

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState();

  const isPlayerOneScoredNotMoreThanThrice = () => {
    return playerOneScore <= THRICE;
  };

  const isPlayerTwoScoredNotMoreThanThrice = () => {
    return playerTwoScore <= THRICE;
  };

  const getLookUpScore = () => {
    return `${scoreLookUp[playerOneScore]}${HYPHEN}${scoreLookUp[playerTwoScore]}`;
  };

  const calculateGameScore = () => {
    if (playerOneScore === LOVE && playerTwoScore === LOVE) {
      return LOVE_ALL;
    }
    if (isPlayerOneScoredNotMoreThanThrice() && playerTwoScore === LOVE) {
      return getLookUpScore();
    }
    if (isPlayerTwoScoredNotMoreThanThrice() && playerOneScore === LOVE) {
      return getLookUpScore();
    }
  };

  const updateGameScore = () => {
    setGameScore(calculateGameScore());
  };

  useEffect(() => {
    updateGameScore();
  }, [playerOneScore, playerTwoScore]);

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
  playerOneScore: PropTypes.number.isRequired,
  playerTwoScore: PropTypes.number.isRequired
};

export default ScoreBoard;
