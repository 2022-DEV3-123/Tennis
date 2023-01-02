import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard';
import Player from '../Player';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { GAME_TITLE, PLAYER_ONE, LOVE, ONE, PLAYER_TWO } = applicationConstants;

const Game = () => {
  const [playerOneScore, setPlayerOneScore] = useState(LOVE);
  const [playerTwoScore, setPlayerTwoScore] = useState(LOVE);

  const incrementScore = (playerWhoScored) => {
    playerWhoScored === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + ONE)
      : setPlayerTwoScore(playerTwoScore + ONE);
  };

  return (
    <div className='Game'>
      <header className='Header'>
        <h1 data-testid={GAME_TITLE}>{GAME_TITLE}</h1>
      </header>
      <ScoreBoard playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} />
      <div className='container'>
        <Player name={PLAYER_ONE} onScored={incrementScore} />
        <Player name={PLAYER_TWO} onScored={incrementScore} />
      </div>
    </div>
  );
};

export default Game;
