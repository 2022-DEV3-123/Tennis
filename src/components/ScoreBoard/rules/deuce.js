import {
  hasBothPlayersScoredEqual,
  isPlayerScoredNotLessThanThrice
} from '../../../utils/compareScore';
import { applicationConstants } from '../../../constants/applicationConstants';

const { DEUCE } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasBothPlayersScoredEqual(playerOneScore, playerTwoScore) &&
    isPlayerScoredNotLessThanThrice(playerOneScore)
  );
};

const getScore = () => {
  return DEUCE;
};

const deuce = {
  isCriteriaMatched,
  getScore
};

export { deuce };
