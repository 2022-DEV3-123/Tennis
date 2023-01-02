import { render, screen } from '@testing-library/react';
import { testConstants } from '../../constants/testConstants';
import ScoreBoard from './';

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL, LOVE } = testConstants;

describe('Score Board', () => {
  beforeEach(() => {
    render(<ScoreBoard playerOneScore={LOVE} />);
  });

  test('Should contain title', () => {
    expect(screen.getByTestId(SCORE_TITLE).textContent).toEqual(SCORE_TITLE);
  });

  test('Should contain Love-All when game starts', () => {
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
  });
});
