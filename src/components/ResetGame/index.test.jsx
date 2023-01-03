import { render, screen, fireEvent } from '@testing-library/react';
import { testConstants } from '../../constants/testConstants';
import ResetGame from '../ResetGame';

const { RESET } = testConstants;

describe('Reset component', () => {
  const reset = jest.fn();
  beforeEach(() => {
    render(<ResetGame onReset={reset} />);
  });

  test('Should contain reset button', () => {
    expect(screen.getByTestId(RESET).textContent).toEqual(RESET);
  });

  test('Should call reset event when clicked', () => {
    fireEvent.click(screen.getByTestId(RESET));

    expect(reset).toHaveBeenCalled();
  });
});
