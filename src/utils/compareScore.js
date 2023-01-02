import { applicationConstants } from '../constants/applicationConstants';

const { THRICE } = applicationConstants;

const isPlayerOneScoredNotMoreThanThrice = (playerOneScore) => {
  return playerOneScore <= THRICE;
};

const isPlayerTwoScoredNotMoreThanThrice = (playerTwoScore) => {
  return playerTwoScore <= THRICE;
};

const isPlayerScoredLessThanThrice = (playerScore) => {
  return playerScore < THRICE;
};

const isPlayerScoredNotLessThanThrice = (playerScore) => {
  return playerScore >= THRICE;
};

const hasBothPlayersScoredNotMoreThanThrice = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerOneScoredNotMoreThanThrice(playerOneScore) &&
    isPlayerTwoScoredNotMoreThanThrice(playerTwoScore)
  );
};

const hasBothPlayersScoredEqual = (playerOneScore, playerTwoScore) => {
  return playerOneScore === playerTwoScore;
};

export {
  isPlayerScoredLessThanThrice,
  isPlayerScoredNotLessThanThrice,
  hasBothPlayersScoredNotMoreThanThrice,
  hasBothPlayersScoredEqual
};
