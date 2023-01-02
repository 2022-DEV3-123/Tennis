import React from 'react';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL } = applicationConstants;

const ScoreBoard = () => {
  return (
    <div>
      <h4 className='score-title' data-testid={SCORE_TITLE}>
        {SCORE_TITLE}
      </h4>
      <p className='game-score' data-testid={GAME_SCORE}>
        {LOVE_ALL}
      </p>
    </div>
  );
};

export default ScoreBoard;
