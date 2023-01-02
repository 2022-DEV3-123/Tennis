import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../Game';
import { testConstants } from '../../constants/testConstants';

const { GAME_TITLE, SCORE_TITLE, GAME_SCORE, LOVE_ALL, PLAYER_ONE, FIFTEEN_LOVE } = testConstants;

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

  test('Love-All when game starts', () => {
    gameScoreShouldBe(LOVE_ALL);
  });

  test('Fifteen-Love when player one scores once', () => {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    gameScoreShouldBe(FIFTEEN_LOVE);
  });
});
