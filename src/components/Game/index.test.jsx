import { render, screen } from '@testing-library/react';
import Game from '../Game';
import { testConstants } from '../../constants/testConstants';

const { GAME_TITLE } = testConstants;

describe('Tennis Game', () => {
  test('Should contain game title', () => {
    render(<Game />);
    expect(screen.getByTestId(GAME_TITLE).textContent).toEqual(GAME_TITLE);
  });
});
