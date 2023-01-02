import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard';
import Player from '../Player';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { GAME_TITLE, PLAYER_ONE, LOVE, ONE } = applicationConstants;

const Game = () => {
  const [playerOneScore, setPlayerOneScore] = useState(LOVE);

  const incrementScore = () => {
    setPlayerOneScore(playerOneScore + ONE);
  };

  return (
    <div className='Game'>
      <header className='Header'>
        <h1 data-testid={GAME_TITLE}>{GAME_TITLE}</h1>
      </header>
      <ScoreBoard playerOneScore={playerOneScore} />
      <Player name={PLAYER_ONE} onScored={incrementScore} />
    </div>
  );
};

export default Game;
