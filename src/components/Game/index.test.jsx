import { render, screen } from '@testing-library/react';
import Game from '../Game';
import { testConstants } from '../../constants/testConstants';

const { GAME_TITLE, SCORE_TITLE, GAME_SCORE, LOVE_ALL } = testConstants;

describe('Tennis Game', () => {
  test('Should contain game title', () => {
    render(<Game />);
    expect(screen.getByTestId(GAME_TITLE).textContent).toEqual(GAME_TITLE);
  });

  test('Should contain score title', () => {
    render(<Game />);
    expect(screen.getByTestId(SCORE_TITLE).textContent).toEqual(SCORE_TITLE);
  });
});

describe('Set Game Score', () => {
  test('Love-All when game starts', () => {
    render(<Game />);
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
  });
});
