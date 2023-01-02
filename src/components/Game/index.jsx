import React from 'react';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { GAME_TITLE } = applicationConstants;

const Game = () => {
  return (
    <div className='Game'>
      <header className='Header'>
        <h1 data-testid={GAME_TITLE}>{GAME_TITLE}</h1>
      </header>
    </div>
  );
};

export default Game;
