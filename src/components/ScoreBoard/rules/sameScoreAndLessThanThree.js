import {
  hasBothPlayersScoredEqual,
  isPlayerScoredLessThanThrice
} from '../../../utils/compareScore';
import { scoreLookUp, applicationConstants } from '../../../constants/applicationConstants';

const { ALL, HYPHEN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasBothPlayersScoredEqual(playerOneScore, playerTwoScore) &&
    isPlayerScoredLessThanThrice(playerOneScore)
  );
};

const getScore = (playerScore) => {
  return `${scoreLookUp[playerScore]}${HYPHEN}${ALL}`;
};

const sameScoreAndLessThanThree = {
  isCriteriaMatched,
  getScore
};

export { sameScoreAndLessThanThree };
