import {
  isPlayerScoredNotLessThanThrice,
  isScoreDifferenceMoreThanOne
} from '../../../utils/compareScore';
import { applicationConstants } from '../../../constants/applicationConstants';

const { PLAYER_ONE_WIN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerScoredNotLessThanThrice(playerOneScore) &&
    isScoreDifferenceMoreThanOne(playerOneScore, playerTwoScore)
  );
};

const getScore = () => {
  return PLAYER_ONE_WIN;
};

const playerWins = {
  isCriteriaMatched,
  getScore
};

export { playerWins };
