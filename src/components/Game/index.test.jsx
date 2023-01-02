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
  LOVE_FIFTEEN
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

  const playerOneScores = (times) => {
    for (let count = ZERO; count < times; count++) {
      fireEvent.click(screen.getByTestId(PLAYER_ONE));
    }
  };

  const playerTwoScores = (times) => {
    for (let count = ZERO; count < times; count++) {
      fireEvent.click(screen.getByTestId(PLAYER_TWO));
    }
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
});
