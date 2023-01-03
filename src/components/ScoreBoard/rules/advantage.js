import {
  hasAnyPlayerScoredNotLessThanThrice,
  isScoreDifferenceIsOne
} from '../../../utils/compareScore';
import { applicationConstants } from '../../../constants/applicationConstants';

const { PLAYER_ONE_ADVANTAGE, PLAYER_TWO_ADVANTAGE } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasAnyPlayerScoredNotLessThanThrice(playerOneScore, playerTwoScore) &&
    isScoreDifferenceIsOne(playerOneScore, playerTwoScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return playerOneScore > playerTwoScore ? PLAYER_ONE_ADVANTAGE : PLAYER_TWO_ADVANTAGE;
};

const advantange = {
  isCriteriaMatched,
  getScore
};

export { advantange };
