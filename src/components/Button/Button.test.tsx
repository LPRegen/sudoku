import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button test', () => {
  it('Renders the component', () => {
    render(<Button>Test</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });

  it('Button is correctly aria-labeled', () => {
    render(<Button>New game</Button>);
    const buttonEl = screen.getByRole('button', { name: 'New game' });
    expect(buttonEl).toBeInTheDocument();
  });
});
