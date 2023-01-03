import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { applicationConstants } from '../../constants/applicationConstants';
import { deuce } from './rules/deuce';
import { sameScoreAndLessThanThree } from './rules/sameScoreAndLessThanThree';
import { scoreNotMoreThanThree } from './rules/scoreNotMoreThanThree';
import { playerWins } from './rules/win';
import { advantange } from './rules/advantage';
import './index.css';

const { SCORE_TITLE, GAME_SCORE, WIN } = applicationConstants;
const rules = [sameScoreAndLessThanThree, deuce, scoreNotMoreThanThree, playerWins, advantange];

const ScoreBoard = ({ playerOneScore, playerTwoScore, setGameover }) => {
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

  const isGameOver = () => {
    return gameScore?.includes(WIN);
  };

  useEffect(() => {
    updateGameScore();
  }, [playerOneScore, playerTwoScore]);

  useEffect(() => {
    if (isGameOver()) {
      setGameover(true);
    }
  }, [gameScore]);

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
  playerTwoScore: PropTypes.number.isRequired,
  setGameover: PropTypes.func.isRequired
};

export default ScoreBoard;
