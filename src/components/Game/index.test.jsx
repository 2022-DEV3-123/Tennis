import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../Game';
import { testConstants } from '../../constants/testConstants';

const {
  GAME_TITLE,
  SCORE_TITLE,
  GAME_SCORE,
  LOVE_ALL,
  PLAYER_ONE,
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  ZERO,
  ONCE,
  TWICE,
  THRICE,
  FORTY_LOVE,
  PLAYER_TWO,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  LOVE_FORTY,
  FIFTEEN_THIRTY,
  FIFTEEN_ALL,
  THIRTY_ALL,
  DEUCE,
  PLAYER_ONE_WIN,
  PLAYER_TWO_WIN,
  PLAYER_ONE_ADVANTAGE,
  PLAYER_TWO_ADVANTAGE,
  RESET
} = testConstants;

describe('Tennis Game', () => {
  beforeEach(() => {
    render(<Game />);
  });

  test('Should contain game title', () => {
    expect(screen.getByTestId(GAME_TITLE).textContent).toEqual(GAME_TITLE);
  });

  test('Should contain score title', () => {
    expect(screen.getByTestId(SCORE_TITLE).textContent).toEqual(SCORE_TITLE);
  });
});

describe('Set Game Score', () => {
  beforeEach(() => {
    render(<Game />);
  });

  const gameScoreShouldBe = (expected) => {
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
  };

  const playerScores = (times, playerName) => {
    for (let count = ZERO; count < times; count++) {
      fireEvent.click(screen.getByTestId(playerName));
    }
  };

  const playerOneScores = (times) => {
    playerScores(times, PLAYER_ONE);
  };

  const playerTwoScores = (times) => {
    playerScores(times, PLAYER_TWO);
  };

  test('Love-All when game starts', () => {
    gameScoreShouldBe(LOVE_ALL);
  });

  test('Fifteen-Love when player one scores once', () => {
    playerOneScores(ONCE);

    gameScoreShouldBe(FIFTEEN_LOVE);
  });

  test('Thirty-Love when player one scores twice', () => {
    playerOneScores(TWICE);

    gameScoreShouldBe(THIRTY_LOVE);
  });

  test('Forty-Love when player one scores thrice', () => {
    playerOneScores(THRICE);

    gameScoreShouldBe(FORTY_LOVE);
  });

  test('Love-Fifteen when player two scores once', () => {
    playerTwoScores(ONCE);

    gameScoreShouldBe(LOVE_FIFTEEN);
  });

  test('Love-Thirty when player two scores twice', () => {
    playerTwoScores(TWICE);

    gameScoreShouldBe(LOVE_THIRTY);
  });

  test('Love-Forty when player two scores thrice', () => {
    playerTwoScores(THRICE);

    gameScoreShouldBe(LOVE_FORTY);
  });

  test('Fifteen-Thirty when player one scores once and player two scores twice', () => {
    playerOneScores(ONCE);
    playerTwoScores(TWICE);

    gameScoreShouldBe(FIFTEEN_THIRTY);
  });

  test('Fifteen-All when both players scores once', () => {
    playerOneScores(ONCE);
    playerTwoScores(ONCE);

    gameScoreShouldBe(FIFTEEN_ALL);
  });

  test('Thirty-All when both players scores twice', () => {
    playerOneScores(TWICE);
    playerTwoScores(TWICE);

    gameScoreShouldBe(THIRTY_ALL);
  });

  test('Deuce when both players scores are equal and not less than thrice', () => {
    playerOneScores(THRICE);
    playerTwoScores(THRICE);

    gameScoreShouldBe(DEUCE);
  });

  test('Player One Win When player one score is greater than 3 and two points more than player two', () => {
    playerOneScores(THRICE);
    playerTwoScores(TWICE);
    playerOneScores(ONCE);

    gameScoreShouldBe(PLAYER_ONE_WIN);
  });

  test('Player Two Win When player two score is greater than 3 and two points more than player one', () => {
    playerTwoScores(TWICE);
    playerOneScores(ONCE);
    playerTwoScores(TWICE);

    gameScoreShouldBe(PLAYER_TWO_WIN);
  });

  test('Advantage Player One when player one score is greater than 3 and one point more than player two', () => {
    playerOneScores(THRICE);
    playerTwoScores(THRICE);
    playerOneScores(ONCE);

    gameScoreShouldBe(PLAYER_ONE_ADVANTAGE);
  });

  test('Advantage Player Two when the player two score is greater than 3 and one point more than player one', () => {
    playerTwoScores(THRICE);
    playerOneScores(THRICE);
    playerTwoScores(ONCE);

    gameScoreShouldBe(PLAYER_TWO_ADVANTAGE);
  });

  test('Winner when one of the player wins and game should be over', () => {
    playerOneScores(ONCE);
    playerTwoScores(TWICE);
    playerOneScores(THRICE);

    gameScoreShouldBe(PLAYER_ONE_WIN);
    expect(screen.getByTestId(PLAYER_ONE)).toBeDisabled();
    expect(screen.getByTestId(PLAYER_TWO)).toBeDisabled();
  });

  test('Love-All when game resets', () => {
    fireEvent.click(screen.getByTestId(RESET));

    gameScoreShouldBe(LOVE_ALL);
  });
});
