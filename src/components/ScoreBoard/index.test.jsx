import { render, screen } from '@testing-library/react';
import { testConstants } from '../../constants/testConstants';
import ScoreBoard from './';

const { SCORE_TITLE, GAME_SCORE, LOVE_ALL, LOVE, FOUR_TIMES } = testConstants;

describe('Score Board', () => {
  beforeEach(() => {
    render(<ScoreBoard playerOneScore={LOVE} playerTwoScore={LOVE} setGameover={jest.fn()} />);
  });

  test('Should contain title', () => {
    expect(screen.getByTestId(SCORE_TITLE).textContent).toEqual(SCORE_TITLE);
  });

  test('Should contain Love-All when game starts', () => {
    expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
  });
});

describe('Score Board on game over', () => {
  test('Should call gameOver event with truthy value', () => {
    const gameOver = jest.fn();
    render(<ScoreBoard playerOneScore={LOVE} playerTwoScore={FOUR_TIMES} setGameover={gameOver} />);

    expect(gameOver).toHaveBeenCalledWith(true);
  });
});
