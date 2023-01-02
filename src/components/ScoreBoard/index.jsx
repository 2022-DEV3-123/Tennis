import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { applicationConstants } from '../../constants/applicationConstants';
import { deuce } from './rules/deuce';
import { sameScoreAndLessThanThree } from './rules/sameScoreAndLessThanThree';
import { scoreNotMoreThanThree } from './rules/scoreNotMoreThanThree';
import { playerWins } from './rules/win';
import './index.css';

const { SCORE_TITLE, GAME_SCORE } = applicationConstants;
const rules = [sameScoreAndLessThanThree, deuce, scoreNotMoreThanThree, playerWins];

const ScoreBoard = ({ playerOneScore, playerTwoScore }) => {
  const [gameScore, setGameScore] = useState();

  const calculateGameScore = () => {
    for (const rule of rules) {
      if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
        return rule.getScore(playerOneScore, playerTwoScore);
      }
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
