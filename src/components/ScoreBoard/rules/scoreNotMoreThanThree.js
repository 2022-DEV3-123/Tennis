import { hasBothPlayersScoredNotMoreThanThrice } from '../../../utils/compareScore';
import { applicationConstants, scoreLookUp } from '../../../constants/applicationConstants';

const { HYPHEN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return hasBothPlayersScoredNotMoreThanThrice(playerOneScore, playerTwoScore);
};

const getScore = (playerOneScore, playerTwoScore) => {
  return `${scoreLookUp[playerOneScore]}${HYPHEN}${scoreLookUp[playerTwoScore]}`;
};

const scoreNotMoreThanThree = {
  isCriteriaMatched,
  getScore
};

export { scoreNotMoreThanThree };
