import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button test', () => {
  it('Renders the component', () => {
    render(<Button handleClick={jest.fn()}>Test</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });

  it('Button is correctly aria-labeled', () => {
    render(<Button handleClick={jest.fn()}>New game</Button>);
    const buttonEl = screen.getByRole('button', { name: 'New game' });
    expect(buttonEl).toBeInTheDocument();
  });

  it('handleClick function is executed correctly on click', async () => {
    const handleClick = jest.fn();
    render(<Button handleClick={handleClick}>New game</Button>);
    const buttonEl = screen.getByRole('button');
    await userEvent.click(buttonEl);
    expect(handleClick).toHaveBeenCalled();
  });
});
