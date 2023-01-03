import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard';
import Player from '../Player';
import ResetGame from '../ResetGame';
import { applicationConstants } from '../../constants/applicationConstants';
import './index.css';

const { GAME_TITLE, PLAYER_ONE, LOVE, ONE, PLAYER_TWO } = applicationConstants;

const Game = () => {
  const [playerOneScore, setPlayerOneScore] = useState(LOVE);
  const [playerTwoScore, setPlayerTwoScore] = useState(LOVE);
  const [gameOver, setGameover] = useState(false);

  const incrementScore = (playerWhoScored) => {
    playerWhoScored === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + ONE)
      : setPlayerTwoScore(playerTwoScore + ONE);
  };

  const resetGame = () => {
    setPlayerOneScore(LOVE);
    setPlayerTwoScore(LOVE);
    setGameover(false);
  };

  return (
    <div className='Game'>
      <header className='Header'>
        <h1 data-testid={GAME_TITLE}>{GAME_TITLE}</h1>
      </header>
      <ScoreBoard
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        setGameover={setGameover}
      />
      <ResetGame onReset={resetGame} />
      <div className='container'>
        <Player name={PLAYER_ONE} onScored={incrementScore} gameOver={gameOver} />
        <Player name={PLAYER_TWO} onScored={incrementScore} gameOver={gameOver} />
      </div>
    </div>
  );
};

export default Game;
