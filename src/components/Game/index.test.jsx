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
  test('Love-All when game starts', () => {
    render(<Game />);
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
  });

  test('Fifteen-Love when player one scores once', () => {
    render(<Game />);
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(FIFTEEN_LOVE);
  });
});
