import { render, screen, fireEvent } from '@testing-library/react';
import { testConstants } from '../../constants/testConstants';
import Player from './';

const { PLAYER_ONE, PLAYER_ONE_TITLE, SCORED } = testConstants;

describe('Player component', () => {
  const onScored = jest.fn();
  beforeEach(() => {
    render(<Player name={PLAYER_ONE} onScored={onScored} />);
  });

  test('Should contain player name title', () => {
    expect(screen.getByTestId(PLAYER_ONE_TITLE).textContent).toEqual(PLAYER_ONE);
  });

  test('Should contain player scored button', () => {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    expect(screen.getByTestId(PLAYER_ONE).textContent).toEqual(SCORED);
    expect(onScored).toHaveBeenCalled();
  });

  test('Should call score event with player name', () => {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));

    expect(onScored).toHaveBeenCalledWith(PLAYER_ONE);
  });
});
