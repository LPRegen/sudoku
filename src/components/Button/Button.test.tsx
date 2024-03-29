import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
  it('Renders the component', () => {
    render(<Button>Test</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toBeVisible();
  });

  it('Button is correctly aria-labeled', () => {
    render(<Button>New game</Button>);
    const buttonEl = screen.getByRole('button', { name: 'New game' });
    expect(buttonEl).toBeInTheDocument();
  });

  it('handleClick function is executed correctly on click', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>New game</Button>);
    const buttonEl = screen.getByRole('button');
    await userEvent.click(buttonEl);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Disabled button contains `aria-disabled`', () => {
    render(<Button disabled>New game</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeDisabled();
  });

  it('handleClick is not executed when the button is disabled', async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        New Game
      </Button>
    );
    const buttonEl = screen.getByRole('button');
    await userEvent.click(buttonEl);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('Button is focused on Tab keypress', async () => {
    render(<Button>New game</Button>);
    const buttonEl = screen.getByRole('button');
    await userEvent.keyboard('[Tab]');
    expect(buttonEl).toHaveFocus();
  });

  it('handleClick is executed on Enter keypress', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>New game</Button>);
    const buttonEl = screen.getByRole('button');
    buttonEl.focus();
    await userEvent.keyboard('[Enter]');
    expect(handleClick).toHaveBeenCalled();
  });

  it('handleClick is executed on Space keypress', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>New game</Button>);
    const buttonEl = screen.getByRole('button');
    buttonEl.focus();
    await userEvent.keyboard('[Space]');
    expect(handleClick).toHaveBeenCalled();
  });
});
